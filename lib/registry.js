/* @flow */

import {Emitter} from 'atom'

type ProjectPatch = {
  added: Project[],
  projects: Project[]
}

// TODO: Projects should be stored in a map of key -> project

class ProjectRegistry {
  constructor () {
    this.projects = []
    this.emitter = new Emitter()
  }

  destroy () {
    this.emitter.dispose()
  }

  // Gets an array of all projects
  // The given callback is invoked when projects are added
  observe (callback: (ProjectPatch) => *) {
    callback({added: this.projects, projects: this.projects})

    return this.onDidAdd(callback)
  }

  onDidAdd (callback: (ProjectPatch) => *) {
    return this.emitter.on('did-add', callback);
  }

  add (projectProps: ProjectProps[]) {
    const added = [];

    for (const props of projectProps) {
      const project = new Project(props)

      added.push(project)
      this.projects.push(project)
    }

    this.emitter.emit('did-add', {added, projects: this.projects})
  }

  // Get the active project in the current window.
  getActiveProject (): ?Project {
  }
}

module.exports = ProjectRegistry
