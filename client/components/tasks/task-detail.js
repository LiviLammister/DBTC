import React, { Component } from 'react'

import {
  Button,
  Header,
  Modal,
  Statistic
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
          <Header as='h3'>Calendar</Header> 
          <Calendar dates={task.dates} />
          <Header as='h3'>Statistics</Header> 
          <Statistic.Group widths='three' size='large'>
            <Statistic value={task.dates.length}  label='Total Days'     />
            <Statistic value={task.currentStreak} label='Current Streak' />
            <Statistic value={task.longestStreak} label='Longest Streak' />
          </Statistic.Group>
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
