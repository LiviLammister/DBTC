import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card, Container } from 'semantic-ui-react'

import { NewTask,TaskCard } from './index'

const TasksPage = (props) => {
  const { tasks } = props
  if (!tasks) return <div />
  return (
    <Container>
      <Card.Group centered>
        <NewTask />
        {tasks.map(task =>
          <TaskCard key={task.id} task={task} />
        )}
      </Card.Group>
    </Container>
  )
}

TasksPage.propTypes = { tasks: PropTypes.arrayOf(PropTypes.object) }

const mapStateToProps = ({ tasks }) => ({ tasks })

export default connect(mapStateToProps)(TasksPage)