import React     from 'react'
import PropTypes from 'prop-types'
import { Link }  from 'react-router-dom'
import {
  Button,
  Card,
  Container,
  Image,
  Statistic
} from 'semantic-ui-react'

const TaskCard = (props) => {
  const { task } = props
  return (
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src={task.imgUrl} />
        <Card.Header>{task.name}</Card.Header>
        <Card.Description>
          <Container textAlign='center'>
            <Statistic label='Current Streak' value={task.currentStreak} />
          </Container>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group floated='right'>
          <Button basic icon ='check' />
          <Button basic icon='ellipsis horizontal' as={Link} to={`/tasks/${task.id}`} />
        </Button.Group>
      </Card.Content>
    </Card>
  )
}

TaskCard.propTypes = { task: PropTypes.object }

export default TaskCard