'use strict'

import axios from 'axios'

const GET_ALL_TASKS = 'GET_ALL_TASKS'
const CREATE_TASK   = 'CREATE_TASK'
const EDIT_TASK     = 'EDIT_TASK'
const REMOVE_TASK   = 'REMOVE_TASK'

const getAll = tasks => ({ type: GET_ALL_TASKS, tasks })
const create = task  => ({ type: CREATE_TASK,   task  })
const edit   = task  => ({ type: EDIT_TASK,     task  })
const remove = id    => ({ type: REMOVE_TASK,   id    })

export const getAllTasks = () => async dispatch => {
  try {
    const res = await axios.get('/api/tasks/')
    dispatch(getAll(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const createTask = task => async dispatch => {
  try {
    const res = await axios.post('/api/tasks/', task)
    dispatch(create(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const editTask = (id, task) => async dispatch => {
  try {
    const res = await axios.put(`/api/tasks/${id}`, task)
    dispatch(edit(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const removeTask = id => async dispatch => {
  try {
    await axios.delete(`/api/tasks/${id}`)
    dispatch(remove(id))
  } catch (err) {
    console.error(err)
  }
}

const reducer = (tasks = [], action) => {
  switch (action.type) {
    case GET_ALL_TASKS:
      return action.tasks
    case CREATE_TASK:
      return [...tasks, action.task]
    case EDIT_TASK:
      return tasks.map(originalTask => (action.id === originalTask.id ? action.task : originalTask))
    case REMOVE_TASK:
      return tasks.map(task => task.id !== action.id)
    default:
      return tasks
  }
}

export default reducer