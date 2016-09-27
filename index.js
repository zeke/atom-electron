const shell = require('shell')
const apis = require('./lib/apis')

function getSelection () {
  return atom.workspace.getActiveTextEditor().getSelectedText() || atom.workspace.getActiveTextEditor().getWordUnderCursor()
}

function getAPI () {
  var name = getSelection()
  return apis.find(function (api) { return api.name === name })
}

module.exports = {
  activate() {
    atom.commands.add('atom-text-editor', {
      'electron:view-api-on-electron-website': this.website,
      'electron:view-api-on-github-repository': this.repo
    })
  },

  repo() {
    var api = getAPI()
    if (!api) return
    shell.openExternal(api.repoUrl)
  },

  website() {
    var api = getAPI()
    if (!api) return
    shell.openExternal(api.websiteUrl)
  }
}
