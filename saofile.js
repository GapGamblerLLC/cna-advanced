'use strict'

exports = module.exports = {
  actions () {
    const actions = []
    actions.push({
      files: '**',
      templateDir: 'templates/nuxt',
      type: 'add'
    })
    actions.push({
      files: '*',
      templateDir: 'templates',
      type: 'add'
    })
    actions.push({
      patterns: {
        '_.eslintrc.yaml': '.eslintrc.yaml',
        gitignore: '.gitignore',
        '_package.json': 'package.json'
      },
      type: 'move'
    })
    return actions
  },
  async completed () {
    if (this.answers.runGitInit) {
      this.gitInit()
    }
    await this.npmInstall({npmClient: 'npm'})
  },
  prompts () {
    return [
      {
        message: `Formal name of the project (e.g., "Code Come Up"')?`,
        name: 'formalName'
      },
      {
        default: true,
        message: 'Run `git init` in the project directory?',
        name: 'runGitInit',
        type: 'confirm'
      }
    ]
  }
}
