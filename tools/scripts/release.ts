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
function updateVersion(version: string): void {
  write('package.json', version);
}

function createGitRelease(version: string): void {
  const branch = `release/v${version}`;

  execSync(`git checkout -b ${branch}`);
  execSync('git add package.json');
  execSync(`git commit -m "version up v${version}"`);
  execSync('git checkout develop');
  execSync(`git merge ${branch} -m "Merge branch '${branch}' into develop" --no-ff`);
  execSync(`git branch --delete ${branch}`);
  execSync(`git checkout master`);
  execSync(`git rebase develop`);
  execSync(`git push -u origin master develop`);
  execSync(`git checkout develop`);
}

function runChecks(): void {
  output.log({ title: 'Running lint...' });
  execSync('yarn nx run-many --all --target=lint', { stdio: 'inherit' });

  output.log({ title: 'Running tests...' });
  execSync('yarn nx run-many --all --target=test', { stdio: 'inherit' });
}

function ensureCleanDevelopAndMaster(): void {
  const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
  if (status) {
    output.error({ title: 'Develop branch has uncommitted changes. Commit or stash them before releasing.\n' });
    process.exit(1);
  }

  execSync('git fetch origin develop master', { stdio: 'inherit' });

  const localHash = execSync('git rev-parse develop', { encoding: 'utf8' }).trim();
  const remoteHash = execSync('git rev-parse origin/develop', { encoding: 'utf8' }).trim();

  if (localHash !== remoteHash) {
    output.error({ title: 'Develop branch is not in sync with origin/develop. Please pull or push changes first.\n' });
    process.exit(1);
  }

  const localMasterHash = execSync('git rev-parse master', { encoding: 'utf8' }).trim();
  const remoteMasterHash = execSync('git rev-parse origin/master', { encoding: 'utf8' }).trim();

  if (localMasterHash !== remoteMasterHash) {
    output.error({ title: 'Master branch is not in sync with origin/master. Please fetch origin changes first.\n' });
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
    ensureCleanDevelopAndMaster();
    runChecks();

    const brunch = execSync('git rev-parse --abbrev-ref HEAD', {
      encoding: 'utf8',
      maxBuffer: 50 * 1024 * 1024,
    }).trim();

    if (brunch !== 'develop') {
      output.error({
        title: `Creating a new release is only available for the develop branch.\n Current brunch: ${brunch}\n`,
      });
      process.exit(1);
    }

    const lastCommitMessage = execSync('git log --format=%B -n 1 $(git log -1 --pretty=format:"%h") | cat -', {
      encoding: 'utf8',
      maxBuffer: 50 * 1024 * 1024,
    }).trim();

    if (!ignoreRelease && /Merge branch 'release\/v.+?' into develop/gm.test(lastCommitMessage)) {
      output.error({ title: `No new changes detected. If you need to make a release, then use gitlab.\n` });
      process.exit(1);
    }

    output.log({ title: 'Starting a new release.' });

    const version = getVersion();
    updateVersion(version);
    output.log({ title: 'New version was updated on packages.' });

    createGitRelease(version);
    output.log({ title: 'Release was merged on main branch.' });

    output.log({ title: 'New version creation completed successfully.' });
  } catch (e) {
    output.error({ title: 'Creation a new release did not complete successfully' + '\n' + e });
  }
}

release();
