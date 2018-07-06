import React from 'react'
import { Button, Modal, Tab } from 'semantic-ui-react'

import { CalendarPane } from './index'

const paneStyle = {
  'border'   : '0px',
  'margin'   : '1px',
  'width'    : '95%',
  'textAlign': 'center',
}

const TaskDetail = (props) => (
  <Modal
    style={{'height': '800px'}}
    trigger={<Button basic icon='ellipsis horizontal' />}
  >
    <Modal.Header content='Details' />
    <Tab
      menu={{
        secondary: true,
        pointing: true,
      }}
      panes={[
        { 
          menuItem: 'Calendar',
          render: () => <Tab.Pane style={paneStyle}><CalendarPane task={props.task} /></Tab.Pane>
        },
        {
          menuItem: 'Statistics',
          render: () => <Tab.Pane style={paneStyle}>Tab 2 Content</Tab.Pane>
        },
      ]}
    />
  </Modal>
)

export default TaskDetail