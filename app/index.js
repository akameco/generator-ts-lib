const superb = require('superb')
const Generator = require('yeoman-generator')
const _s = require('underscore.string')
const utils = require('./utils')

module.exports = class extends Generator {
  constructor(...args) {
    super(...args)

    this.option('org', {
      type: String,
      description: 'Publish to a GitHub organization account',
    })

    this.option('cli', {
      type: Boolean,
      description: 'Add a CLI',
    })
  }
  // eslint-disable-next-line max-lines-per-function
  async init() {
    const props = await this.prompt([
      {
        name: 'moduleName',
        message: 'What do you want to name your module?',
        default: _s.slugify(this.appname),
        filter: x => utils.slugifyPackageName(x),
      },
      {
        name: 'moduleDescription',
        message: 'What is your module description?',
        default: `My ${superb.random()} module`,
      },
      {
        name: 'cli',
        message: 'Do you need a CLI?',
        type: 'confirm',
        default: Boolean(this.options.cli),
        when: () => this.options.cli === undefined,
      },
    ])
    const or = (option, prop) =>
      this.options[option] === undefined
        ? props[prop || option]
        : this.options[option]

    const cli = or('cli')

    const repoName = utils.repoName(props.moduleName)

    const tpl = {
      moduleName: props.moduleName,
      moduleDescription: props.moduleDescription,
      camelModuleName: _s.camelize(repoName),
      repoName,
      cli,
    }

    const mv = (from, to) => {
      this.fs.move(this.destinationPath(from), this.destinationPath(to))
    }

    this.fs.copyTpl(
      [`${this.templatePath()}/**`, '!**/cli.js'],
      this.destinationPath(),
      tpl
    )

    if (cli) {
      this.fs.copyTpl(
        this.templatePath('cli.js'),
        this.destinationPath('cli.js'),
        tpl
      )
    }

    mv('all-contributorsrc', '.all-contributorsrc')
    mv('editorconfig', '.editorconfig')
    mv('eslintrc', '.eslintrc')
    mv('gitattributes', '.gitattributes')
    mv('gitignore', '.gitignore')
    mv('travis.yml', '.travis.yml')
    mv('prettierrc', '.prettierrc')
    mv('prettierignore', '.prettierignore')
    mv('eslintignore', '.eslintignore')
    mv('_package.json', 'package.json')
    mv('github/ISSUE_TEMPLATE.md', '.github/ISSUE_TEMPLATE.md')
    mv('github/PULL_REQUEST_TEMPLATE.md', '.github/PULL_REQUEST_TEMPLATE.md')
  }
  git() {
    this.spawnCommandSync('git', ['init'])
  }
  install() {
    // yarn add --dev jest prettier eslint
    const devPkgs = [
      '@akameco/tsconfig',
      '@types/jest',
      'all-contributors-cli',
      'eslint-config-precure',
      'eslint',
      'husky',
      'jest',
      'lint-staged',
      'prettier',
      'ts-jest',
      'typescript',
    ]
    this.yarnInstall(devPkgs, { dev: true })
  }
}
