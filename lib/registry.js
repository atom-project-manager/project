/* @flow */

import {Emitter} from 'atom'

// TODO: Projects should be stored in a map of key -> project

class ProjectRegistry {
  constructor () {
    this.projects = []
    this.emitter = new Emitter()
    this.emitter.preempt('did-add', (projects) => {
      this.projects.push(projects...)
    })
  }

  destroy () {
    this.emitter.dispose()
  }

  observe (callback: (Project[]) => *) {
    callback(this.projects.slice())

    return this.onDidAdd(callback)
  }

  onDidAdd (callback: (Project[]) => *) {
    return this.emitter.on('did-add', callback);
  }

  add (projects: ProjectProps[]) {
    this.emitter.emit('did-add', projects.map((props) => new Project(props)))
  }

  // Get the active project in the current window.
  getActiveProject (): ?Project {
  }
}

module.exports = ProjectRegistry
