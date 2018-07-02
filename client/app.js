import React from 'react'
import { Route } from 'react-router-dom'

import { Navigation } from './components'
import { TasksPage } from './components/tasks'

const App = () => {
  return (
    <div>
      <Navigation />
      <Route exact path='/tasks' component={TasksPage}/>
    </div>
  )
}

export default App
