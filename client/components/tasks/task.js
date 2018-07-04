import React       from 'react'
import PropTypes   from 'prop-types'
import { Segment } from 'semantic-ui-react'

const Task = (props) => {
  const { task } = props
  return (
    <Segment>{task.name}</Segment>
  )
}

Task.propTypes = {task: PropTypes.object}