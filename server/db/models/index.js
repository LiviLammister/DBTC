const Day  = require('./day')
const Task = require('./task')

Day.belongsToMany(Task, { through: 'days_tasks'})
Task.belongsToMany(Day, { through: 'days_tasks'})

module.exports = {
  Task
}
