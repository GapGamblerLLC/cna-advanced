#!/usr/bin/env node

'use strict'

const childProcess = require('child_process')
const path = require('path')

const APPLICATION_ENVIRONMENT_MODE = (process.env.NODE_ENV !== 'debug') ? 'distribution' : process.env.NODE_ENV

;(() => {
  const { execPath: nodeExecutableFilePath } = process
  const scriptFilePath = path.join(...[
    __dirname,
    'cli',
    'index.js'
  ])
  let nodeExecutableArguments = []
  if (APPLICATION_ENVIRONMENT_MODE === 'debug') {
    nodeExecutableArguments.push('--inspect-brk')
  }
  const programArguments = process.argv.slice(2)
  nodeExecutableArguments = [
    ...nodeExecutableArguments,
    scriptFilePath,
    ...programArguments
  ]
  childProcess.spawn(nodeExecutableFilePath, nodeExecutableArguments, {
    cwd: process.cwd(),
    detached: false,
    env: process.env,
    shell: false,
    stdio: 'inherit'
  })
})()
