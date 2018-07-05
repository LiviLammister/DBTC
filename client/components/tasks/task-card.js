import React     from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Card,
  Container,
  Image,
  Modal,
  Statistic
} from 'semantic-ui-react'

import { EditTask } from './index'

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
          <Modal trigger ={<Button basic icon='ellipsis horizontal' />}>Edit</Modal>
          <EditTask />
        </Button.Group>
        <Button basic icon ='check' />
      </Card.Content>
    </Card>
  )
}

TaskCard.propTypes = { task: PropTypes.object }

export default TaskCard