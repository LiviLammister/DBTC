'use strict'

import React     from 'react'
import { Route } from 'react-router-dom'

import { CalendarPage }  from './components/calendar'
import { DashboardPage } from './components/dashboard'
import { Navigation }    from './components'
import { StatsPage }     from './components/stats'
import { TasksPage }     from './components/tasks'

const App = () => {
  return (
    <div>
      <Navigation />
      <Route exact path='/'         component={DashboardPage} />
      <Route exact path='/tasks'    component={TasksPage}     />
      <Route exact path='/calendar' component={CalendarPage}  />
      <Route exact path='/stats'    component={StatsPage}     />
    </div>
  )
}

export default App
