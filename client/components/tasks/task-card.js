import React     from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Card,
  Grid,
  Header,
  Image
} from 'semantic-ui-react'

import { TaskDetail } from './index'

const TaskCard = (props) => {
  const { task } = props
  return (
    <Card>
      <Image style={{'padding': '5px'}} src={ task.imgUrl } />
      <Card.Content>
        <Grid verticalAlign='middle'>
          <Grid.Column width='6' floated='left'>
            <Header as='h3'>{ task.name }</Header>
          </Grid.Column>
          <Grid.Column width='6' floated='right'>
            <Button.Group>
              <Button basic color='green' icon='check' />
              <TaskDetail task={task} />
            </Button.Group>
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  )
}

TaskCard.propTypes = { task: PropTypes.object }

export default TaskCard