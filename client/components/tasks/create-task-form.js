import React, { Component } from 'react'
import { Checkbox, Input } from 'semantic-ui-react'

class CreateTaskForm extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render () {
    return (
      <div>
          <Input placeholder='name' />
          <Checkbox label='Monday' />
      </div>
    )
  }
}

export default CreateTaskForm