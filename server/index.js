'use strict'

const path           = require('path')
const express        = require('express')
const morgan         = require('morgan')
const bodyParser     = require('body-parser')
const compression    = require('compression')
const session        = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const db             = require('./db')

const sessionStore = new SequelizeStore({db})
const PORT = process.env.PORT || 8080
const app = express()

// This is a global Mocha hook, used for resource cleanup.
// Otherwise, Mocha v4+ never quits after tests.
if (process.env.NODE_ENV === 'test') {
  after('close the session store', () => sessionStore.stopExpiringSessions())
}

/**
 * In your development environment, you can keep all of your
 * app's secret API keys in a file called `secrets.js`, in your project
 * root. This file is included in the .gitignore - it will NOT be tracked
 * or show up on Github. On your production server, you can add these
 * keys as environment variables, so that they can still be read by the
 * Node process on process.env
 */
if (process.env.NODE_ENV !== 'production') require('../secrets')

const createApp = () => {
  app.use(morgan('dev'))

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))

  app.use(compression())

  app.use('/api', require('./api'))

  app.use(express.static(path.join(__dirname, '..', 'public')))

  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })

  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

async function bootApp() {
  await sessionStore.sync()
  await db.sync()
  await createApp()
  await app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))
}

(require.main === module) ? bootApp() : createApp()

module.exports = app