'use strict'

const $packageDescriptor = require('../package.json')
const chalk = require('chalk').default
const objectz = require('objectz')

const { createOwnFrozenObject: $cofo } = objectz

const APPLICATION_COMMAND_NAME = 'cna-advanced'
const APPLICATION_COMMAND_NAME_COLORED = chalk.magentaBright.bold(APPLICATION_COMMAND_NAME)
const APPLICATION_FORMAL_NAME = 'Code Come Up Advanced Nuxt.js App Creator'
const APPLICATION_FORMAL_NAME_COLORED = chalk.magentaBright.bold(APPLICATION_FORMAL_NAME)
const { version: APPLICATION_VERSION_NUMBER } = $packageDescriptor
const APPLICATION_VERSION_NUMBER_COLORED = chalk.cyanBright(APPLICATION_VERSION_NUMBER)
const APPLICATION_VERSION_SIGNATURE = `${APPLICATION_FORMAL_NAME_COLORED} v${APPLICATION_VERSION_NUMBER_COLORED}`
const APPLICATION_ENVIRONMENT_VARIABLES_PREFIX = APPLICATION_COMMAND_NAME
  .replace('-', '_')
  .toUpperCase()
const APPLICATION_CLI_EPILOGUE = `Copyright © ${new Date().getFullYear() === 2020? 2020 : `2020 - ${new Date().getFullYear()}`} ${chalk.bgBlack.whiteBright.bold('Progress and Fortune LLC')}`

exports = module.exports = $cofo({
  APPLICATION_CLI_EPILOGUE,
  APPLICATION_COMMAND_NAME,
  APPLICATION_COMMAND_NAME_COLORED,
  APPLICATION_ENVIRONMENT_VARIABLES_PREFIX,
  APPLICATION_FORMAL_NAME,
  APPLICATION_FORMAL_NAME_COLORED,
  APPLICATION_VERSION_NUMBER,
  APPLICATION_VERSION_NUMBER_COLORED,
  APPLICATION_VERSION_SIGNATURE
}) // cna-advanced
