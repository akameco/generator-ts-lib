# <%= repoName %>
[![Build Status](https://travis-ci.com/akameco/<%= repoName %>.svg?branch=master)](https://travis-ci.com/akameco/<%= repoName %>)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> <%= moduleDescription %>


## Install

```
$ npm install <%= moduleName %>
```


## Usage

```js
const <%= camelModuleName %> = require('<%= moduleName %>');

<%= camelModuleName %>('unicorns');
//=> 'unicorns & rainbows'
```


## API

### `<%= camelModuleName %>(input, [options])`

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.<% if (cli) { %>


## CLI

```
$ npm install --global <%= moduleName %>
```

```
$ <%= repoName %> --help

  Usage
    <%= repoName %> [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ <%= repoName %>
    unicorns & rainbows
    $ <%= repoName %> ponies
    ponies & rainbows
```<% } %>

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://akameco.github.io"><img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;" alt="akameco"/><br /><sub><b>akameco</b></sub></a><br /><a href="https://github.com/akameco/eslint-checker/commits?author=akameco" title="Code">💻</a> <a href="https://github.com/akameco/eslint-checker/commits?author=akameco" title="Documentation">📖</a> <a href="https://github.com/akameco/eslint-checker/commits?author=akameco" title="Tests">⚠️</a> <a href="#infra-akameco" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
