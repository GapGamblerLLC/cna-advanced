'use strict'

const objectz = require('objectz')
const path = require('path')

const { createOwnFrozenObject: $cofo } = objectz

function getAbsolutePathFromCommandLineArgument (argument) {
  let path_ = String(argument)
  path_ = path.resolve(path_)
  return path_
}

exports = module.exports = $cofo({getAbsolutePathFromCommandLineArgument}) // CreateNuxtAppAdvancedUtilities
