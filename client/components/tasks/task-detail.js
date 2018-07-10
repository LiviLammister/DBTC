import React, { Component } from 'react'

import {
  Button,
  Divider,
  Image,
  Modal,
  Statistic
} from 'semantic-ui-react'

import { Calendar } from './index'

class TaskDetail extends Component {
  state = { modalOpen: false }
  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })
  render() {
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
        <Modal.Content image>
          <Image wrapped size='medium' src={task.imgUrl} />
          <Calendar dates={task.dates} />
          <Divider />
        </Modal.Content>
        <Modal.Content>
          <Statistic.Group widths='three' size='large'>
            <Statistic value={task.dates.length} label='Total Days' />
            <Statistic value={task.currentStreak} label='Current Streak' />
            <Statistic value={task.longestStreak} label='Longest Streak' />
          </Statistic.Group>
          <Divider hidden />
        </Modal.Content>
        <Modal.Actions>
          <Button
            disabled={true}
            color='blue'
            content='Edit'
          />
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
