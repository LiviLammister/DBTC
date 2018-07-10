import React from 'react'
import {
  Button,
  Container,
  Modal,
  Statistic
} from 'semantic-ui-react'

import { Calendar } from './index'

const TaskDetail = ({ task }) => {
  return (
    <Modal trigger={<Button basic color='grey' icon='ellipsis horizontal' />}>
      <Modal.Header content={task.name} />
      <Modal.Content>
        <Container textAlign='center'>
          <Calendar dates={task.dates} />
          <Statistic label='Current Streak' value={task.currentStreak} />
          <Statistic label='Longest Streak' value={task.longestStreak} />
        </Container>
      </Modal.Content>
    </Modal>
  )
}

export default TaskDetail