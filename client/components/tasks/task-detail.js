import React from 'react'
import { Button, Divider, Modal } from 'semantic-ui-react'
import { Calendar } from './index'

const TaskDetail = ({ task }) => {
  return (
    <Modal trigger={<Button basic color='grey' icon='ellipsis horizontal' />}>
      <Modal.Header content='Details' />
      <Modal.Content>
        <div style={{ 'margin': 'auto', 'height': '400px' }}>
          <Calendar dates={task.dates} />
        </div>
        <Divider />
        Hello
      </Modal.Content>
    </Modal>
  )
}

export default TaskDetail