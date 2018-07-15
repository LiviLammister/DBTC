'use strict'

const db = require('../server/db')
const { Task } = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  await Promise.all([
    Task.create({
      name: '10,000 Steps',
      imgUrl: '/img/walking.png',
      dates: ['2018-07-01', '2018-07-02', '2018-07-03', '2018-07-04', '2018-07-05', '2018-07-06', '2018-07-07', '2018-07-08', '2018-07-09', '2018-07-10', '2018-07-11', '2018-07-12', ]
    }),
    Task.create({
      name: 'Brain Training',
      imgUrl: '/img/brain.png'
    }),
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
      imgUrl: '/img/yoga.png',
      dates: ['2018-07-10', '2018-07-11', '2018-07-12']
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
      name: 'No Dairy',
      imgUrl: '/img/no-dairy.png'
    }),
    Task.create({
      name: 'No Gluten',
      imgUrl: '/img/no-gluten.png'
    }),
    Task.create({
      name: 'No Sugar',
      imgUrl: '/img/no-sugar.png'
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
      imgUrl: '/img/coding.png'
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
