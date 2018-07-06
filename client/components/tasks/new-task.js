import React from 'react'
import { Card, Container, Statistic } from 'semantic-ui-react'

const NewTask = () => (
  <Card>
    <Card.Content>
      <Container textAlign='center'>
        <Statistic
          style={{'marginTop': '45px'}}
          label='Add Task'
          value='+'
        />
      </Container>
    </Card.Content>
  </Card>
)

export default NewTask