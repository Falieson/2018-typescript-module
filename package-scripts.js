/** Available scripts (camel or kebab case accepted)
  *  like `nps` or a series like `nps build start.build`
  *  for more info `nps help build`
  *
  * build - nps commit.pre && nps build.ts
  * build.ts - nps scrub.build && nps build.ts.tsc
  * build.ts.tsc - tsc
  * commit.pre - nps commit.pre.saveFixes
  * commit.pre.saveFixes - git add .
  * commit.zen - git-cz
  * commit.zen.retry - git-cz --retry
  * commit.zen.noverify - git-cz --no-verify
  * default - ts-node src/index.ts
  * help - this list of commands
  * scrub.build - node node_modules/rimraf/bin.js dist/
  * start - ts-node src/index.ts
  * start.build - node dist/index.js
  * test - echo "Error: no test specified" && exit 1
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

const scripts = {
  build,
  commit,
  default: start.default,
  scrub,
  start,
  test: 'echo "Error: no test specified" && exit 1',
}

const shortcuts = {
  p: {
    default: 'nps build start.build',
    description: 'Build the code and run the build.',
  }
}

Object.assign(scripts, shortcuts) // appends shortcuts object to the scripts object

module.exports = {
  scripts
}
