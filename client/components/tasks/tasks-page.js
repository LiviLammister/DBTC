import React from 'react'
import { Button, Container, Header } from 'semantic-ui-react'

const TasksPage = () => (
  <Container text>
    <Header as='h2' floated='right'>
      <Button content='Add Task' />
    </Header>
    <Header as='h2' floated='left'>
      TASKS
    </Header>
  </Container>
)

export default TasksPage