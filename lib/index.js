/* @flow */

let Registry
let registry

function activate () {
}

function deactivate () {
  if (registry != null) registry.destroy()
}

function provideProjects () {
  if (Registry == null) Registry = require('./registry')
  if (registry == null) registry = new Registry()

  return registry
}

module.exports = { activate, deactivate, provideProjects }
