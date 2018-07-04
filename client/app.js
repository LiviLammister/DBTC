'use strict'

import React, { Component }  from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect }           from 'react-redux'

import { CalendarPage }  from './components/calendar'
import { DashboardPage } from './components/dashboard'
import { Navigation }    from './components'
import { StatsPage }     from './components/stats'

import { getAllTasks } from './store'

import {
  CreateTaskForm,
  TasksPage
} from './components/tasks'

class App extends Component {
  componentDidMount() {
    this.props.fetchInitialData()
  }

  render() {
    return (
      <div>
        <Navigation />
        <Route exact path='/'          component={DashboardPage}  />
        <Route exact path='/tasks'     component={TasksPage}      />
        <Route exact path='/tasks/add' component={CreateTaskForm} />
        <Route exact path='/calendar'  component={CalendarPage}   />
        <Route exact path='/stats'     component={StatsPage}      />
      </div>
    )
  }
  
}

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(getAllTasks())
  }
})

export default withRouter(connect(null, mapDispatch)(App))
