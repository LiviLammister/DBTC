'use strict'

import React, { Component }  from 'react'
import { withRouter }        from 'react-router-dom'
import { connect }           from 'react-redux'

import {
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
        <TasksPage />
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
