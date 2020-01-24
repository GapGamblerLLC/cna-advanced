'use strict'

const CnaAdvancedConstants = require('../constants')
const CnaAdvancedIo = require('../io')
const CnaAdvancedProcess = require('../process')
const CnaAdvancedUtilities = require('../utilities')
const chalk = require('chalk').default
const objectz = require('objectz')
const path = require('path')
const sao = require('sao')
const yargs = require('yargs')

const { createOwnFrozenObject: $cofo } = objectz
const { createOwnSealedObject: $coso } = objectz

function commandBuilder (yargs) {
  return yargs
    .positional('directory-path', {
      coerce: (argument) => CnaAdvancedUtilities.getAbsolutePathFromCommandLineArgument(argument),
      description: `The directory path of the project (e.g., ${chalk.bold('./codecomeup.com')}).`
    })
    .strict()
}

async function commandHandler (parsedOptions) {
  const options = await processParsedCommandOptions(parsedOptions)
  // CnaAdvancedIo.print(options)
  const generatorPath = path.resolve(__dirname, '..', '..')
  const saoInstance = sao({
    generator: generatorPath,
    outDir: options.directoryPath
  })
  try {
    await saoInstance.run()
  } catch (error) {
    console.trace(error)
    process.exit(1)
  }
  CnaAdvancedProcess.exit(CnaAdvancedProcess.exitCodes.SUCCESS)
}

function processCommandLineArguments (arguments_) {
  const parser = yargs
    .scriptName(CnaAdvancedConstants.APPLICATION_COMMAND_NAME_COLORED)
    .env(CnaAdvancedConstants.APPLICATION_ENVIRONMENT_VARIABLES_PREFIX)
    .locale('en')
    .command('$0 <directory-path>', 'Create an App That Uses NuxtJS App Programattically so you can completely control routing and other under the hood features if you choose.', commandBuilder, commandHandler)
    .help('h', 'Print help information.')
    .alias('h', 'help')
    .version('v', 'Print version information.', CnaAdvancedConstants.APPLICATION_VERSION_SIGNATURE)
    .alias('v', 'version')
    .epilogue(CnaAdvancedConstants.APPLICATION_CLI_EPILOGUE)
    .strict()
  parser.parse(arguments_)
}

async function processParsedCommandOptions (parsedOptions) {
  const options = $coso({
    directoryPath: undefined
  })
  {
    const { directoryPath } = parsedOptions
    options.directoryPath = directoryPath
  }
  return $cofo(options)
}

function setProcessName (name) {
  process.title = name
}

function main (commandArguments) {
  setProcessName(CnaAdvancedConstants.APPLICATION_FORMAL_NAME)
  processCommandLineArguments(commandArguments)
}

;(() => {
  CnaAdvancedProcess.setUpGracefulTermination(() => {
    CnaAdvancedProcess.exit(CnaAdvancedProcess.exitCodes.SUCCESS)
  })
})()

exports = module.exports = $cofo({main}) // CnaAdvancedCliApplication
