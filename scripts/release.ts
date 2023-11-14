import { output } from '@nx/workspace';
import { execSync } from 'node:child_process';
import { writeFileSync, readFileSync } from 'node:fs';

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
  writeFileSync(path, JSON.stringify(config, null, 2));
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
  execSync('git add .');
  execSync(`git commit -m "version up v${version}"`);
  execSync('git checkout develop');
  execSync(`git merge ${branch} --no-ff`);
  execSync(`git branch --delete ${branch}`);
  execSync(`git checkout main`);
  execSync(`git rebase develop`);
  execSync(`git push -u origin main develop`);
  execSync(`git checkout develop`);
}

function release(): void {
  try {
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
