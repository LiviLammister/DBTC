import React       from 'react'
import PropTypes   from 'prop-types'
import { connect } from 'react-redux'

import { Button, Container, Header, Item } from 'semantic-ui-react'

import { Task } from '../tasks'

const TasksPage = (props) => {
  const { tasks } = props
  if (!tasks) return <div />
  return (
    <Container text>
      <Header as='h2' floated='right'>
        <Button content='Add Task' />
      </Header>
      <Header as='h2' floated='left'>
        TASKS
      </Header>
      <Item.Group divided>
        {tasks.map(task =>
          <Task key={task.id} task={task} />
        )}
      </Item.Group>
    </Container>
  )
}

TasksPage.propTypes = {tasks: PropTypes.arrayOf(PropTypes.object)}

const mapStateToProps = ({tasks}) => ({tasks})

export default connect(mapStateToProps)(TasksPage)