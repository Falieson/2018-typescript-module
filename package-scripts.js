/** Available scripts (camel or kebab case accepted)
  *  like `nps` or a series like `nps build start.build`
  *  for more info `nps help build`
  *
  * build - nps commit.pre && nps build.ts
  * build.ts - nps scrub.build && nps build.ts.tsc
  * build.ts.tsc - tsc
  * commit - nps commit.pre && nps commit.zen
  * commit.pre - nps commit.pre.saveFixes
  * commit.pre.saveFixes - git add .
  * commit.zen - git-cz
  * commit.zen.retry - git-cz --retry
  * commit.zen.noverify - git-cz --no-verify
  * default - ts-node src/index.ts
  * help - this list of commands
  * git.tags.push - git push --follow-tags origin master
  * git.tags.deleteAllLocally - git tag -d `git tag | grep -E '.'`
  * publish - nps publish.npm && nps publish.git
  * publish.npm - npm publish --tag next
  * publish.git - git push --follow-tags origin master
  * release - standard-version
  * release.test - standard-version --dry-run
  * release.noverify - standard-version --no-verify
  * release.init - standard-version --first-release
  * release.pre - standard-version --prerelease
  * release.alpha - standard-version --prerelease alpha
  * release.beta - standard-version --prerelease beta
  * release.patch - standard-version --release-as patch
  * release.minor - standard-version --release-as minor
  * release.major - standard-version --release-as major
  * scrub.build - node node_modules/rimraf/bin.js dist/
  * start - ts-node src/index.ts
  * start.build - node dist/index.js
  * test - echo "Error: no test specified" && exit 1
  * p - nps build start.build
**/

const { series, rimraf, } = require('nps-utils') // concurrent, setColors

const build = {
  default: series.nps('commit.pre', 'build.ts'),
  description: "Compile the source to ES5",
  ts: {
    default: series.nps('scrub.build', 'build.ts.tsc'),
    description: 'Remove the previous build and then run the compiler',
    tsc: 'tsc',
  },
}

const scrub = {
  build: rimraf('dist/'),
}

const commit = {
  default    : series.nps('commit.pre', 'commit.zen'),
  pre  : {
    description: 'Run some stuff before committing',
    // default    : series.nps('lint', 'commit.pre.saveFixes'),
    default    : 'nps commit.pre.saveFixes',
    saveFixes  : 'git add .',
  },
  zen: {
    description: 'Commitizen generates beautifully formatted commit messages',
    default    : 'git-cz', // commitizen
    retry   : {
      default:  'git-cz --retry',
      description: 'A commit hook failed, so use the same commit msg that I just put in',
    },
    noverify   : {
      default:  'git-cz --no-verify',
      description: 'Skip pre-commit hooks and start commitizen',
    },
  },
}

const start = {
  build: 'node dist/index.js',
  default: 'ts-node src/index.ts',
}

const git = {
  tags: {
    push: 'git push --follow-tags origin master',
    deleteAllLocally: "git tag -d `git tag | grep -E '.'`",
  }
}

const release = {
  test: 'standard-version --dry-run',
  noverify: 'standard-version --no-verify',
  init: 'standard-version --first-release',     // 1.0.0
  default: 'standard-version',                  // 1.0.1
  pre: 'standard-version --prerelease',         // 1.0.1-0
  alpha: 'standard-version --prerelease alpha', // 1.0.1-alpha.0
  beta: 'standard-version --prerelease beta',   // 1.0.1-beta.0
  patch: 'standard-version --release-as patch', // 1.0.2
  minor: 'standard-version --release-as minor', // 1.1.0
  major: 'standard-version --release-as major', // 2.0.0
}

const publish = {
  default: series.nps('publish.npm', 'publish.git'),
  npm: 'npm publish --tag next',
  git: git.tags.push,
}

const scripts = {
  build,
  commit,
  default: start.default,
  git,
  publish,
  release,
  scrub,
  start,
  test: 'echo "Error: no test specified" && exit 1',
}

const shortcuts = {
  p: {
    default: 'nps build start.build',
    description: 'Build the code and run the build.',
  },
  c: {
    default: 'nps commit',
    description: 'Start a commit!',
  },
  cn: {
    default: 'nps commit.zen.noverify',
    description: 'Skip all pre-commit ops.',
  },
  cr: {
    default: 'nps commit.zen.retry',
    description: 'Retry last commit.',
  },
  // FIXME: w/ a prompt. We don't want to run this accidentally!
  //   https://stackoverflow.com/q/50770212/604950
  // r: {
  //   default: 'nps build release publish',
  //   description: 'Build the code, bump the version, and update git/npm.',
  // },
}

const finalScripts = Object.assign({}, shortcuts, scripts,) // appends scripts to shortcuts so they are grepp'd first

module.exports = {
  scripts: finalScripts,
}
