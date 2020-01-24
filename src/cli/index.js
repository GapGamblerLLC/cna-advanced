#!/usr/bin/env node

'use strict'

const path = require('path')

const CnaAppCliApplication = require('./application')

const programArguments = process.argv.slice(2)

;((programArguments) => {
  CnaAppCliApplication.main(programArguments)
})(programArguments)
