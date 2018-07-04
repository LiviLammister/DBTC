'use strict'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools }                           from 'redux-devtools-extension'
import createLogger                                      from 'redux-logger'
import thunkMiddleware                                   from 'redux-thunk'

import tasks from './tasks'

const reducer    = combineReducers({ tasks })
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })))
const store      = createStore(reducer, middleware)

export default store
export * from './tasks'
