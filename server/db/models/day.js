'use strict'

const Sequelize = require('sequelize')
const moment    = require('moment')
const db        = require('../db')

moment().format()

const Day = db.define('day', {
  value: {
    type: Sequelize.STRING,
    defaultValue: () => new moment().format("YYYY-MM-DD")
  }
})

module.exports = Day