'use strict'

const db = require('../server/db')
const { Task } = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  await Promise.all([
    Task.create({
      name: 'French',
      imgUrl: '/img/eiffel-tower.png'
    }),
    Task.create({
      name: 'German',
      imgUrl: '/img/holstentor.png'
    }),
    Task.create({
      name: 'Italian',
      imgUrl: '/img/coliseum.png'
    }),
    Task.create({
      name: 'Just Water',
      imgUrl: '/img/water.png'
    }),
    Task.create({
      name: 'Meditation',
      imgUrl: '/img/yoga.png'
    }),
    Task.create({
      name: 'No Waste',
      imgUrl: '/img/recycling.png'
    }),
    Task.create({
      name: 'No Spend',
      imgUrl: '/img/dollar-symbol.png'
    }),
    Task.create({
      name: 'Paleo',
      imgUrl: '/img/eat.png'
    }),
    Task.create({
      name: 'Read',
      imgUrl: '/img/book.png'
    }),
    Task.create({
      name: 'Swimming',
      imgUrl: '/img/swimming.png'
    }),
    Task.create({
      name: 'Write App',
      imgUrl: '/img/coding.png',
    })
  ])
  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed
