import React from 'react'
import { Button, Divider, Modal } from 'semantic-ui-react'
import { CalendarPane } from './index'

const TaskDetail = () => (
  <Modal trigger={<Button basic color='grey' icon='ellipsis horizontal' />}>
    <Modal.Header content='Details' />
    <Modal.Content>
      <div style={{'margin': 'auto', 'height': '375px'}}>
        <CalendarPane />
      </div>
      <Divider />
      Hello
    </Modal.Content>
  </Modal>
)

export default TaskDetail