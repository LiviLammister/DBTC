const Sequelize = require('sequelize')
const db = require('../db')

const Task = db.define('task', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
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
  }
})

module.exports = Task