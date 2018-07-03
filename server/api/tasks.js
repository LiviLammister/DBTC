const router = require('express').Router()
const { Task } = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.findAll()
    res.json(tasks)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const result = await Task.create({ name: req.body.name })
    res.json(result[1])
  } catch (err) {
    next(err)
  }  
})

router.get('./:id', async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id)
    res.json(task)
  } catch (err) {
    next(err)
  }
})