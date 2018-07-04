import React     from 'react'
import PropTypes from 'prop-types'
import { Item }  from 'semantic-ui-react'

const Task = (props) => {
  const { task } = props
  return (
    <Item>
      <Item.Image src={task.imgUrl} size='tiny' />
      <Item.Content>
        <Item.Header>{task.name}</Item.Header>
      </Item.Content>
    </Item>
  )
}

Task.propTypes = {task: PropTypes.object}

export default Task