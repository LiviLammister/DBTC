const Sequelize = require('sequelize')
const db        = require('../db')

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
    type: Sequelize.Array(Sequelize.STRING),
  }
})

module.exports = Task