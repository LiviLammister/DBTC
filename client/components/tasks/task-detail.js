import React from 'react'
import { Button, Container, Tab } from 'semantic-ui-react'

import { CalendarPane } from './index'

const TaskDetail = (props) => (
  <Container text>
    <Tab
      menu={{
        secondary: true,
        pointing: true,
      }}
      panes={[
        { menuItem: 'Calendar',   render: () => <Tab.Pane style={{'border': '0px'}}><CalendarPane /></Tab.Pane> },
        { menuItem: 'Statistics', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
      ]}
    />
  </Container>
)

export default TaskDetail