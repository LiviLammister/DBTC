'use strict'

import moment                    from 'moment'
import PropTypes                 from 'prop-types'
import React                     from 'react'
import { connect }               from 'react-redux'
import { Card, Divider, Header } from 'semantic-ui-react'

import { NewTask, TaskCard } from './index'

moment().format()

const today = moment().format('YYYY-MM-DD')

const TasksPage = ({ tasks }) => {
  if (!tasks) return <div />
  const archivedTasks   = tasks.filter(task =>  task.archived)
  const activeTasks     = tasks.filter(task => !task.archived)
  const unfinishedTasks = activeTasks.filter(task => !task.dates.includes(today))
  const finishedTasks   = activeTasks.filter(task =>  task.dates.includes(today))
  return (
    <div>
      <Header as='h1' textAlign='center'>Today's Tasks</Header>
      <Card.Group centered>
        <NewTask />
        {unfinishedTasks.map(task =>
          <TaskCard key={task.id} task={task} />
        )}
      </Card.Group>
      <Divider />
      <Header as='h1' textAlign='center'>Finished Tasks</Header>
      <Card.Group centered>
        {finishedTasks.map(task => <TaskCard key={task.id} task={task} />)}
      </Card.Group>
      <Divider />
      <Header as='h1' textAlign='center'>Archived Tasks</Header>
      <Card.Group centered>
        {archivedTasks.map(task => <TaskCard key={task.id} task={task} />)}
      </Card.Group>
    </div>
  )
}

TasksPage.propTypes = { tasks: PropTypes.arrayOf(PropTypes.object) }

const mapStateToProps = ({ tasks }) => ({ tasks })

export default connect(mapStateToProps)(TasksPage)