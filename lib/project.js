/* @flow */

export type Props = {
  // An array of strings containing the paths of the
  // project's directories
  paths: string[],
}

class Project {
  props: Props

  constructor (props: Props) {
    this.props = props
  }

  // Switch to this project in the current window
  activate (options: {
    // If `true`, the project service will attempt to focus an open Atom window
    // with this project active.
    searchAllWindows?: boolean
  }) {
  }

  // Open this project in a new window
  open () {
  }

  // Close this project. Has no affect if this project is not active.
  close () {
  }

  // Check if this project is active.
  isActive(options: {
    // If `true`, the project service will search all windows for this
    // project.
    searchAllWindows?: boolean
  }) {
  }
}

module.exports = Project
