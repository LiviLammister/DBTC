'use strict'

import axios              from 'axios'
import MockAdapter        from "axios-mock-adapter";
import { expect }         from 'chai'
import configureMockStore from "redux-mock-store";
import thunkMiddleware    from "redux-thunk";

import reducer from './tasks'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('Task reducer', () => {
  let store
  let mockAxios
  const initState = []

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  it('Eventually dispatches GET TASK action', async () => {
    const fakeTask = {
      name: 'test',
      imgUrl: '/img/question.png',
      currentStreak: 1,
      longestStreak: 1,
      dates: []
    }
    mockAxios.onGet('/api/tasks').replyOnce(200, fakeTask)
    await store.dispatch()
  })
  


})