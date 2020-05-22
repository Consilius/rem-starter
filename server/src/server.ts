const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
// Applications imports
const config = require('./config/index.js')
import { paths } from './conf'
import router from './routes/router'
import Controller from './controllers/controller'
import Repository from './repositories/repository'

const app = express()
const host = 'http://localhost'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Initialize Controllers and Repositories
const repository = new Repository({ username: 'admin', password: 'Admin564', dbName: 'main' })
const controller = new Controller(repository)

// Declare routes
app.use(paths.root, router(controller))

// NODE_ENV === 'development' client runs on webpack-dev-server
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../../client/dist')))
}

// Handle undefined routes
app.use("*", (_, res) => {
  res.send('Hello from root')
})

app.listen(config.port, 'localhost', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.info('==> Listening on port %s in %s mode. Open up %s:%s/ in your browser.', config.port, process.env.NODE_ENV, host, config.port)
})

export default app
