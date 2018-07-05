'use strict'

import React, { Component }  from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect }           from 'react-redux'

import {
  Navigation,
  TaskDetail,
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
        <Route exact path='/tasks'     component={TasksPage}     />
        <Route exact path='/tasks/:id' component={TaskDetail}    />
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
