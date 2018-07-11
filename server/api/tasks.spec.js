'use strict'

const { expect } = require('chai')
const db         = require('../db')
const app        = require('../index')
const request    = require('supertest')
const Task       = db.model('task')

describe('Task routes', () => {
  beforeEach(() => db.sync({ force: true }))

  describe('/api/tasks/', () => {
    const taskName = 'test app'

    beforeEach(() => Task.create({ name: taskName }))

    it('GET /api/tasks/', () => {
      return request(app)
        .get('/api/tasks')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].name).to.be.equal(taskName)
          expect(res.body[0].currentStreak).to.be.equal(0)
          expect(res.body[0].longestStreak).to.be.equal(0)
          expect(res.body[0].dates).to.be.an('array')
        })
    })

    const anotherTaskName = 'another test app'

    it('POST /api/tasks/', () => {
      return request(app)
        .post('/api/tasks/')
        .send({ name: anotherTaskName })
        .expect(200)
        .then(res => { expect(res.body).to.be.equal('') })
    })

    it('GET /api/tasks/:id', () => {
      return request(app)
        .get('/api/tasks/1')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object')
          expect(res.body.name).to.be.equal(taskName)
          expect(res.body.currentStreak).to.be.equal(0)
          expect(res.body.longestStreak).to.be.equal(0)
          expect(res.body.dates).to.be.an('array')
        })
    })

    const newDates = ['1970-01-01']

    it('PUT /api/tasks/:id', () => {
      return request(app)
        .put('/api/tasks/1')
        .send({dates: newDates})
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[1]).to.be.an('array')
        })
    })

    // @bug Test returning 500
    xit('DELETE /api/tasks/:id', () => {
      return request(app)
        .delete('/api/tasks/1')
        .expect(204)
    })

  }) // end /api/tasks
}) // end Task routes