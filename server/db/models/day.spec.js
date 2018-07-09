'use strict'

const { expect } = require('chai')
const moment     = require('moment')

const db  = require('../db')
const Day = require('./day')

moment().format('YYYY-MM-DD')

describe('Day model', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe('Correctly formats default date', () => {
    let testDay

    beforeEach( () => {
      return Day.create()
        .then(day => {
          testDay = day
        })
    })

    it('Returns date in YYYY/MM/DD with no time data', () => {
      expect(testDay.value).to.be.equal(moment().format('YYYY-MM-DD'))
    })

  })
})