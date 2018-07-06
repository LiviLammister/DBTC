import React from 'react'
import { Button, Modal, Tab } from 'semantic-ui-react'

import { CalendarPane } from './index'

const paneStyle = {
  'border' : '0px',
  'margin' : '1px',
  'width': '95%'
}

const TaskDetail = (props) => (
  <Modal trigger={<Button basic icon='ellipsis horizontal' />}>
    <Modal.Header content='Details' />
    <Tab
      menu={{
        secondary: true,
        pointing: true,
      }}
      panes={[
        { menuItem: 'Calendar',   render: () => <Tab.Pane style={paneStyle}><CalendarPane /></Tab.Pane> },
        { menuItem: 'Statistics', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
      ]}
    />
  </Modal>
)

export default TaskDetail