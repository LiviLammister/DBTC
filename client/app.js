'use strict'

import React, { Component }  from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect }           from 'react-redux'

import {
  Dashboard,
  Navigation,
  TasksPage,
}  from './components'

import { getAllTasks } from './store'

class App extends Component {
  componentDidMount() {
    this.props.fetchInitialData()
  }

  render() {
    return (
      <div>
        <Navigation />
        <Route exact path='/'      component={Dashboard} />
        <Route exact path='/tasks' component={TasksPage} />
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
