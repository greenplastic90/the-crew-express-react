const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const ensureLoggedIn = require('./config/ensureLoggedIn')

require('dotenv').config()
require('./config/database')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))

// Middleware to serve the React app
app.use(express.static(path.join(__dirname, 'build')))

// Middleware for JWT
app.use(require('./config/checkToken'))

// API routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/crews', ensureLoggedIn, require('./routes/api/crews'))
app.use('/api/adventures', ensureLoggedIn, require('./routes/api/adventures'))
app.use('/api/missions', ensureLoggedIn, require('./routes/api/mission'))
app.use('/api/mission-tracker/', ensureLoggedIn, require('./routes/api/missionTracker'))

// Catch-all route to always return the React app
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || 5001

app.listen(port, function () {
	console.log(`Express app running on port ${port}`)
})
