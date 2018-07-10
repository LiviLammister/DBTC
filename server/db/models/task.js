const moment    = require('moment')
const Sequelize = require('sequelize')

const db = require('../db')

moment().format()

const Task = db.define('task', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue: '/img/question.png'
  },
  currentStreak: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  longestStreak: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  dates: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  }
})

Task.prototype.resetCurrentStreak = function () {
  const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')
  if (!this.dates.includes(yesterday)) this.currentStreak = 0
}

module.exports = Task