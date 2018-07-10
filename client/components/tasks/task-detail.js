import React, { Component }from 'react'

import {
  Button,
  Container,
  Modal,
} from 'semantic-ui-react'

import { Calendar } from './index'

class TaskDetail extends Component {
  state = { modalOpen: false }
  handleOpen  = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })
  render () {
    const { task } = this.props
    return (
      <Modal
        trigger={<Button
          basic
          color='grey'
          icon='ellipsis horizontal'
          onClick={this.handleOpen}
        />}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header content={task.name} />
        <Modal.Content>
          <Container textAlign='center'>
            <Calendar dates={task.dates} />
          </Container>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content='Close'
            onClick={this.handleClose}
          />
        </Modal.Actions>
      </Modal>
    )
  }
}

export default TaskDetail
