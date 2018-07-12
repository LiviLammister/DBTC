'use strict'

import PropTypes            from 'prop-types'
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import {
  Button,
  Divider,
  Image,
  Modal,
  Statistic
} from 'semantic-ui-react'

import { Calendar }   from './index'
import { removeTask } from '../../store/tasks'

class TaskDetail extends Component {
  constructor() {
    super()
    this.state = { modalOpen: false }
  }
  
  _handleOpen  = () => this.setState({ modalOpen: true })

  _handleClose = () => this.setState({ modalOpen: false })

  _handeRemove = () => {
    this.props.removeTask(this.props.task.id)
    window.location.reload()
  }

  render() {
    const { task } = this.props
    return (
      <Modal
        trigger={<Button basic color='grey' icon='ellipsis horizontal' onClick={this._handleOpen} />}
        open={this.state.modalOpen}
        onClose={this._handleClose}
      >
        <Modal.Header content={task.name} />
        <Modal.Content image>
          <Image
            wrapped
            size='medium'
            src={task.imgUrl}
          />
          <Calendar dates={task.dates} />
          <Divider />
        </Modal.Content>
        <Modal.Content>
          <Statistic.Group
            widths='one'
            size='large'
          >
            <Statistic
              value={task.dates.length}
              label='Total Days'
            />
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
            color='red'
            content='Delete'
            onClick={this._handleRemove}
          />
          <Button
            content='Close'
            onClick={this._handleClose}
          />
        </Modal.Actions>
      </Modal>
    )
  }
}

TaskDetail.propTypes = {
  removeTask: PropTypes.func,
  task      : PropTypes.object
}

const mapDispatch = { removeTask }

export default connect(null, mapDispatch)(TaskDetail)
