const mongoose = require('mongoose')
const Mission = require('./models/mission')
require('dotenv').config()

async function seedMissions() {
	// Data based on the specifications provided
	const missionData = [
		{
			number: 1,
			tasks: 1,
			tiles: [],
			rule: {
				type: 'Comm',
				description: 'Normal Communication',
			},
		},
		{
			number: 2,
			tasks: 2,
			tiles: [],
			rule: {
				type: 'Comm',
				description: 'Normal Communication',
			},
		},
		// ... Add other missions here
		{
			number: 50,
			tasks: 10,
			tiles: [{ value: '>' }, { value: '>>' }, { value: '>>>' }],
			rule: {
				type: 'Special',
				description: 'Each rocket card must win a trick in ascending order',
			},
		},
	]

	// Delete existing missions
	await Mission.deleteMany({})

	// Populate missions
	for (const mission of missionData) {
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
