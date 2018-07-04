'use strict'

import React, { Component } from 'react'
import { Container, Form, Header, Input } from 'semantic-ui-react'

class CreateTaskForm extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  _handleChange = (e, {name, value}) => {this.setState({ [name]: value })}

  render () {
    const {name} = this.state
    return (
      <Container>
        <Header>New Task</Header>
        <Form>
          <Form.Field inline>
            <label>Name</label>
            <Input
              value={name}
              onChange={this._handleChange}
            />
          </Form.Field>
          <Form.Group inline>
            <label>Days</label>
            <Form.Checkbox label='Monday'    />
            <Form.Checkbox label='Tuesday'   />
            <Form.Checkbox label='Wednesday' />
            <Form.Checkbox label='Thursday'  />
            <Form.Checkbox label='Friday'    />
            <Form.Checkbox label='Saturday'  />
            <Form.Checkbox label='Sunday'    />
          </Form.Group>
        </Form>
      </Container>
    )
  }
}

export default CreateTaskForm