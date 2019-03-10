import path from 'path'
import test from 'ava'
import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import pify from 'pify'
import utils from './app/utils'

let generator

test.beforeEach(async () => {
  await pify(helpers.testDirectory)(path.join(__dirname, 'temp'))
  generator = helpers.createGenerator('ts-lib:app', ['../app'], null, {
    skipInstall: true,
  })
})

test.serial('generates expected files', async () => {
  helpers.mockPrompt(generator, {
    moduleName: 'test',
    cli: false,
  })

  await pify(generator.run.bind(generator))()

  assert.file([
    '.all-contributorsrc',
    '.editorconfig',
    '.eslintrc',
    '.git',
    '.gitattributes',
    '.github/ISSUE_TEMPLATE.md',
    '.github/PULL_REQUEST_TEMPLATE.md',
    '.gitignore',
    '.travis.yml',
    'license',
    'package.json',
    'readme.md',
    'lint-staged.config.js',
    'src/index.test.ts',
    'src/index.ts',
    'tsconfig.json',
  ])

  assert.noFile('cli.js')
})

test.serial('CLI option', async () => {
  helpers.mockPrompt(generator, {
    moduleName: 'test',
    cli: true,
    cov: true,
  })

  await pify(generator.run.bind(generator))()

  assert.file('cli.js')
  assert.fileContent('package.json', /"bin":/u)
  assert.fileContent('package.json', /"bin": "cli.js"/u)
  assert.fileContent('package.json', /"meow"/u)
})

test('parse scoped package names', t => {
  t.is(
    utils.slugifyPackageName('author/thing'),
    'author-thing',
    'slugify non-scoped packages'
  )
  t.is(
    utils.slugifyPackageName('@author/thing'),
    '@author/thing',
    'accept scoped packages'
  )
  t.is(
    utils.slugifyPackageName('@author/hi/there'),
    'author-hi-there',
    'fall back to regular slugify if invalid scoped name'
  )
})

test.serial('prompts for description', async () => {
  helpers.mockPrompt(generator, {
    moduleName: 'test',
    moduleDescription: 'foo',
    cli: false,
  })

  await pify(generator.run.bind(generator))()

  assert.fileContent('package.json', /"description": "foo",/u)
  assert.fileContent('readme.md', /> foo/u)
})

test.serial('defaults to superb description', async () => {
  helpers.mockPrompt(generator, {
    moduleName: 'test',
    cli: false,
  })

  await pify(generator.run.bind(generator))()

  assert.fileContent('package.json', /"description": "My .+ module",/u)
  assert.fileContent('readme.md', /> My .+ module/u)
})
