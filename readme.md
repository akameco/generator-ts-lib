# @akameco/generator-ts-lib [![Build Status](https://travis-ci.com/akameco/generator-ts-lib.svg?branch=master)](https://travis-ci.com/akameco/generator-ts-lib)

> Scaffold node module with TypeScript.

## Features

- jest
- prettier
- eslint
- eslint-config-precure
- hasky/lint-staged
- all-contirbutors


## Install

```
$ npm install --global yo @akameco/generator-ts-lib
```


## Usage

With [yo](https://github.com/yeoman/yo):

```
$ yo @akameco/ts-lib
```

There are multiple command-line options available:

```
$ yo @akameco/ts-lib --help

  Usage:
    yo @akameco/ts-lib [options]

  Options:
    --help          # Print the generator's options and usage
    --skip-cache    # Do not remember prompt answers                      Default: false
    --skip-install  # Do not automatically install dependencies           Default: false
    --cli           # Add a CLI
    --coverage      # Add code coverage with nyc
    --coveralls     # Upload coverage to coveralls.io (implies --coverage)
```

## Tip

Use [chalk](https://github.com/sindresorhus/chalk) if you want colors in your CLI.


## License

MIT © [akameco](https://akameco.github.io)
