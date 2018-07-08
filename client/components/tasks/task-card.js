import React     from 'react'
import PropTypes from 'prop-types'
import {
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
          <Grid.Column width='8' floated='left'>
            <Header as='h3'>{ task.name }</Header>
          </Grid.Column>
          <Grid.Column width='4' floated='right'>
            <TaskDetail />
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  )
}

TaskCard.propTypes = { task: PropTypes.object }

export default TaskCard