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
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub>akameco</sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/<%= repoName %>/commits?author=akameco "Code") [📖](https://github.com/akameco/<%= repoName %>/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/<%= repoName %>/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
