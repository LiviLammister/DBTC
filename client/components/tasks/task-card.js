'use strict'

import moment      from 'moment'
import PropTypes   from 'prop-types'
import React       from 'react'
import { connect } from 'react-redux';
import {
  Button,
  Card,
  Grid,
  Header,
  Image,
  Popup
} from 'semantic-ui-react'

import { TaskDetail } from './index'
import { editTask }   from '../../store/tasks'

moment().format()

const TaskCard = (props) => {
  const { task } = props
  const today = moment().format('YYYY-MM-DD')
  const ifFinishedToday = () => task.dates.includes(today)
  return (
    <Card>
      <Image src={ifFinishedToday() ? '/img/check.png' : task.imgUrl} style={{ 'padding': '5px' }} />
      <Card.Content>
        <Grid verticalAlign='middle'>
          <Grid.Column width='10' floated='left'>
            <Header as='h3' content={task.name} />
          </Grid.Column>
          <Grid.Column
            floated='right'
            width='6'
          >
            <Button.Group>
              <Popup
                trigger={<Button
                  basic
                  color='green'
                  icon='check'
                  disabled={ifFinishedToday()}
                  onClick={() => {
                    props.editTask(task.id, { ...task, dates: [ ...task.dates, today ] }) // add today to task's date list
                    window.location.reload()
                  }} 
                  />}
                  content='Mark task as complete'
                />
              
              <TaskDetail task={task} />
            </Button.Group>
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  )
}

TaskCard.propTypes = {
  editTask: PropTypes.func,
  task    : PropTypes.object
}

const mapDispatch = { editTask }

export default connect(null, mapDispatch)(TaskCard)