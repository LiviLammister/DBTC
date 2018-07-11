'use strict'

const { expect } = require('chai')
const db         = require('../index')
const Task       = db.model('task')

describe('Task model', () => {
  beforeEach(() => db.sync({ force: true }))

  describe('Default values', () => {
    let testTask

    beforeEach(async () => {
      testTask = await Task.create({ name: 'test' })
    })

    it('Correctly sets default image URL', () => {
      expect(testTask.imgUrl).to.be.equal('/img/question.png')
    })

    it('Sets current streak to 0', () => {
      expect(testTask.currentStreak).to.be.equal(0)
    })

    it('Sets longest streak to 0', () => {
      expect(testTask.longestStreak).to.be.equal(0)
    })

    it('Sets dates to an empty array', () => {
      expect(testTask.dates).to.be.an('array')
      expect(testTask.dates).to.have.length(0)
    })

  }) // end Default values
}) // end Task model