const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const ensureLoggedIn = require('./config/ensureLoggedIn')

require('dotenv').config()
// Connect to db after the dotenv above
require('./config/database')

const app = express()

app.use(logger('dev'))
// Process data in body of request if
// Content-Type: 'application/json'
// and put that data on req.body
app.use(express.json())
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

// middleware that adds the user object from a JWT to req.user
app.use(require('./config/checkToken'))

// Put all API routes here (before the catch-all)
app.use('/api/users', require('./routes/api/users'))

app.use('/api/crews', ensureLoggedIn, require('./routes/api/crews'))

app.use('/api/mission-tracker/', ensureLoggedIn, require('./routes/api/missionTracker'))

//! uncomment bellow if you want to allow users to create their own missions
//! mission model will need to be updated so that it has the id of the user creating it and possibly an id of a campaine (if user can create full campaine)
// app.use('/api/missions', ensureLoggedIn, require('./routes/api/missions'))

// "catch-all" route that will match all GET requests
// that don't match an API route defined above
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || 5001

app.listen(port, function () {
	console.log(`Express app running on port ${port}`)
})
