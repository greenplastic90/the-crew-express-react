const mongoose = require('mongoose')
const Mission = require('../models/mission')
const { planetNine } = require('./planetNineData')

require('dotenv').config()

async function seedMissions() {
	// Delete existing missions
	await Mission.deleteMany({})

	// Populate missions
	for (const mission of planetNine) {
		const newMission = new Mission(mission)
		await newMission.save()
	}
}

// Connect to MongoDB and seed missions
mongoose
	.connect(process.env.DATABASE_URL)
	.then(() => {
		console.log('MongoDB connected')
		return seedMissions()
	})
	.then(() => {
		console.log('Missions seeded')
		mongoose.disconnect()
	})
	.catch((err) => {
		console.error('Something went wrong:', err)
		mongoose.disconnect()
	})
