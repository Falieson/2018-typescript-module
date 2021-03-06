<p align='center'>
  <h1 align='center'>Typescript Module w/ Definitions (TGRStack)</h1>
</p>

[![TypeScript](https://img.shields.io/badge/TypeScript-2.8.1-blue.svg?style=flat-square)](https://github.com/Microsoft/TypeScript)
<!-- [![styled with TSLint](https://img.shields.io/badge/styled_with-TSLint-ff69b4.svg?style=flat-square)](https://github.com/palantir/tslint/) -->
<!-- [![WebPack](https://img.shields.io/badge/WebPack-4.5.0-blue.svg?style=flat-square)](https://github.com/Microsoft/TypeScript) -->
[![Node](https://img.shields.io/badge/Node-8.11.2-blue.svg?style=flat-square)](https://github.com/Microsoft/TypeScript)

[![NPS friendly](https://img.shields.io/badge/NPS-friendly-brightgreen.svg?style=flat-square)](https://github.com/kentcdodds/nps)
[![Commitizen friendly](https://img.shields.io/badge/Commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![Semver friendly](https://img.shields.io/badge/semver-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

## About

This starter kit is a launching point for ts/js module development (not React). Running the build script compiles the typescript code into a distribution that is ready to be published to a registry like NPM, and can easily be consumed by other TS modules. This module is part of a collection of uniformly built starter-kits designed for large-scale application development with TypeScript, GraphQL, and React. Find these, articles, and examplse at [www.TGRStack.com](http://www.TGRStack.com). Skip to the bottom for links to a series of tutorials that walkthrough the creation of this module.

## Commands - READ THIS

```bash
* nps                   # Executes the module, watching for rebuilds.
* nps help              # Displays all available commands
* nps commit            # Creates a commit, don't use `git commit -m ...`
* nps build             # Builds the module
* nps lint              # Lint checks the module
* nps test              # Test checks the module
```

## Features

### Core

- [ ] 🚀  ES2018+ support syntax that is stage-3 or later in the TC39 process.
- [ ] 🔥  Hot development restarts dev-server when your src changes
- [ ] 🎛  Preconfigured to support development and optimized production builds
- [x] 🎶  `typescript` incremental returns reducing development bugs
- [ ] 🚦  `tslint` configured for strict, consistent, code style

### Tests

- [ ] 🎭 `jest` as the test framework.
- [ ] 🎭 `ts-jest` configured to test TS files, uses tsconfig.jest.json, and skip babel.

### Build (w/ Webpack)

- [ ] 📦  All source is bundled using Webpack v4
- [ ] 🌟  webpack for dev, prod, common
- [ ] 🚦  `ts-loader` for compiling typescript
- [ ] 💦  babel-loader for additional polyfills (browser support)
- [ ] 😎  HappyPack
- [ ] 🤖  Auto generated Vendor DLL for smooth development experiences
- [ ] 🍃  Tree-shaking

### Utils

- [x] 🎮  `nps` node-package-scripts removes the limitation of package.json enabling JS & //comments .  Modify `/package-scripts.js` and use `nps <command>` instead of `npm run <command>`.
- [x] 🙌  `commitizen` to help us generate beautifully formatted and consistent commit messages.
- [x] 😹  `cz-emoji` is a plugin for commitizen that adds emoji to the commit template.
- [x] 🏆  `standard-version` is a replacement for `npm version` with automatic CHANGELOG generation
- [ ] ✅  `commitlint` validates commit messages to follow commitizen patterns

## Getting started

To use the starter-kit to build your own ts-module run these commands:

```bash
git clone https://github.com/Falieson/2018-typescript-module.git my-project
cd my-project
rm -rf .git && git init
git commit -m "INIT'd w/ Falieson's 2018-typescript-module@SHA4985"
npm install
nps test
nps
```

Open package.json and reset following fields:
```text
- name
- version ( It is recommended to start from 1.0.0 )
- description
- main ( "umd/typescript-lib-starter.js" => "umd/{name}.js" )
- repository.url
- author
- license ( use whatever you want )
```

Now go make some changes to `src/index.ts` to see the tooling in action.

## Docs
- [HowTo make a TS Module w/ Declarations](http://www.tgrstack.com/#ts-module_articles)
- [Changelog](/CHANGELOG.md)

## References
- [Hotell's TS Lib Starter](https://github.com/Hotell/typescript-lib-starter)
- [AlexJoverm's TS Lib Starter](https://github.com/alexjoverm/typescript-library-starter)
- [Basarat's TS Lib STarter](https://github.com/basarat/ts-npm-module)
