import React       from 'react'
import PropTypes   from 'prop-types'
import { connect } from 'react-redux'
import { Card, Header }    from 'semantic-ui-react'

import { NewTask,TaskCard } from './index'

const TasksPage = ({ tasks }) => {
  if (!tasks) return <div />
  return (
    <div>
      <Header>Today's Tasks</Header>
      <Card.Group centered>
        <NewTask />
        {tasks.map(task =>
          <TaskCard key={task.id} task={task} />
        )}
      </Card.Group>
    </div>
  )
}

TasksPage.propTypes = { tasks: PropTypes.arrayOf(PropTypes.object) }

const mapStateToProps = ({ tasks }) => ({ tasks })

export default connect(mapStateToProps)(TasksPage)