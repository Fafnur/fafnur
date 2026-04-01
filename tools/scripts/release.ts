import { output } from '@nx/workspace';
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

/**
 * Read data
 *
 * @param path Path to file
 */
function read(path: string): { version: string } {
  return JSON.parse(readFileSync(path).toString());
}

/**
 * Return a new version for NX workspace
 */
function getVersion(): string {
  const config = read('package.json');

  const [, , lastDay, lastRelease] = config.version.split('.');
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const release = day !== lastDay ? 0 : +lastRelease + 1;

  return `${year}.${month}.${day}.${release}`;
}

/**
 * Write version on package.json
 *
 * @param path Path to package.json
 * @param version New version
 */
function write(path: string, version: string): void {
  const config = read(path);
  config.version = version;
  writeFileSync(path, JSON.stringify(config, null, 2) + '\n');
}

/**
 * Update versions
 */
function createGitRelease(version: string): void {
  const branch = `release/v${version}`;

  execSync(`git checkout -b ${branch}`);
  execSync('node --require @swc-node/register tools/scripts/sitemap.ts');
  execSync('git add package.json apps/fafnur/public/sitemap.xml');
  execSync(`git commit -m "version up v${version}"`);
  execSync('git checkout develop');
  execSync(`git merge ${branch} -m "Merge branch '${branch}' into develop" --no-ff`);
  execSync(`git branch --delete ${branch}`);
  execSync(`git checkout main`);
  execSync(`git rebase develop`);
  execSync(`git push -u origin main develop`);
  execSync(`git checkout develop`);
}

function runChecks(): void {
  output.log({ title: 'Running lint...' });
  execSync('yarn nx run-many --all --target=lint --no-tui', { stdio: 'inherit' });

  output.log({ title: 'Running tests...' });
  execSync('yarn nx run-many --all --target=test --no-tui', { stdio: 'inherit' });

  output.log({ title: 'Running e2e tests...' });
  execSync('yarn nx e2e fafnur-e2e --no-tui', { stdio: 'inherit' });
}

function ensureCleanDevelopAndMain(): void {
  const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
  if (status) {
    output.error({ title: 'Develop branch has uncommitted changes. Commit or stash them before releasing.\n' });
    process.exit(1);
  }

  execSync('git fetch origin develop main', { stdio: 'inherit' });

  const localHash = execSync('git rev-parse develop', { encoding: 'utf8' }).trim();
  const remoteHash = execSync('git rev-parse origin/develop', { encoding: 'utf8' }).trim();

  if (localHash !== remoteHash) {
    output.error({ title: 'Develop branch is not in sync with origin/develop. Please pull or push changes first.\n' });
    process.exit(1);
  }

  const localMainHash = execSync('git rev-parse main', { encoding: 'utf8' }).trim();
  const remoteMainHash = execSync('git rev-parse origin/main', { encoding: 'utf8' }).trim();

  if (localMainHash !== remoteMainHash) {
    output.error({ title: 'Main branch is not in sync with origin/main. Please fetch origin changes first.\n' });
    process.exit(1);
  }
}

function release(): void {
  try {
    let ignoreRelease = false;
    if (process.env.npm_config_argv) {
      const params = JSON.parse(process.env.npm_config_argv)['original'];

      ignoreRelease = params.includes('blog');
    }
    const brunch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();

    if (brunch !== 'develop') {
      output.error({
        title: `Creating a new release is only available for the develop branch.\n Current brunch: ${brunch}\n`,
      });
      process.exit(1);
    }

    ensureCleanDevelopAndMain();
    runChecks();

    const lastCommitMessage = execSync('git log --format=%B -n 1 HEAD', { encoding: 'utf8' }).trim();

    if (!ignoreRelease && /Merge branch 'release\/v.+?' into develop/gm.test(lastCommitMessage)) {
      output.error({ title: `No new changes detected. If you need to make a release, then use gitlab.\n` });
      process.exit(1);
    }

    output.log({ title: 'Starting a new release.' });

    const version = getVersion();
    write('package.json', version);
    output.log({ title: 'New version was updated on packages.' });

    createGitRelease(version);
    output.log({ title: 'Release was merged on main branch.' });

    output.log({ title: 'New version creation completed successfully.' });
  } catch (e) {
    output.error({ title: 'Creation a new release did not complete successfully' + '\n' + e });
  }
}

release();
