'use strict'

const _$each = require('lodash/each')
const objectz = require('objectz')

const { createOwnFrozenObject: $cofo } = objectz

const exitCodes = $cofo({
  SUCCESS: 0x00,
  FAILURE: 0x01
})

function exit (code) {
  process.exit(code)
}

function setUpGracefulTermination (handler) {
  _$each(['SIGINT', 'SIGQUIT', 'SIGTERM'], (signalEventName) => {
    process.prependOnceListener(signalEventName, handler)
  })
}

exports = module.exports = $cofo({
  exit,
  exitCodes,
  setUpGracefulTermination
}) // CreateNuxtAppAdvancedProcess
