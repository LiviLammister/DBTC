import React, { Component } from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

class EditTask extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <Modal trigger={<Button basic icon='edit' />} >
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>We've found the following gravatar image associated with your e-mail address.</p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal>
    )
  }
}

export default EditTask