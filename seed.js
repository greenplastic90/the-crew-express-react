const mongoose = require('mongoose')
const Mission = require('./models/mission')
require('dotenv').config()

async function seedMissions() {
	// Data based on the specifications provided
	const missionData = [
		{
			number: 1,
			tasks: 1,
		},
		{
			number: 2,
			tasks: 2,
		},
		{
			number: 3,
			tasks: 2,
			tiles: [{ value: '1' }, { value: '2' }],
		},
		{
			number: 4,
			tasks: 3,
		},
		{
			number: 5,
			rule: {
				type: 'Ask & assign',
				description: 'Avoid taking any tricks',
			},
		},
		{
			number: 6,
			tasks: 3,
			tiles: [{ value: '>' }, { value: '>>' }],
			rule: {
				type: 'Comm',
				description: 'Interference',
			},
		},
		{
			number: 7,
			tasks: 3,
			tiles: [{ value: 'Ω' }],
		},
		{
			number: 8,
			tasks: 3,
			tiles: [{ value: '1' }, { value: '2' }, { value: '3' }],
		},
		{
			number: 9,
			rule: {
				type: 'Special',
				description: 'A non-rocket, 1-card must win a trick',
			},
		},
		{
			number: 10,
			tasks: 4,
		},
		{
			number: 11,
			tasks: 4,
			tiles: [{ value: '1' }],
			rule: {
				type: 'Special',
				description: 'Commander selects 1 crew who cannot communicate',
			},
		},
		{
			number: 12,
			tasks: 4,
			tiles: [{ value: 'Ω' }],
			rule: {
				type: 'Special',
				description:
					'After the 1st trick, each player takes a random card from the player to their right',
			},
		},
		{
			number: 13,

			rule: {
				type: 'Special',
				description: 'A trick must be won with each of the rocket cards',
			},
		},
		{
			number: 14,
			tasks: 4,
			tiles: [{ value: '>' }, { value: '>>' }, { value: '>>>' }],
			rule: {
				type: 'Comm',
				description: 'Interference',
			},
		},
		{
			number: 15,
			tasks: 4,
			tiles: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }],
		},
		{
			number: 16,
			rule: {
				type: 'Special',
				description: 'A trick may not be won with any 9-card',
			},
		},
		{
			number: 17,
			tasks: 2,
			tiles: [{ value: '>' }],
			rule: {
				type: 'Special',
				description: 'A trick may not be won with any 9-card',
			},
		},
		{
			number: 18,
			tasks: 5,
			tiles: [{ value: '>' }],
			rule: {
				type: 'Comm',
				description: 'Disrupted till 2nd trick',
			},
		},
	]

	const temp = {
		number: 0,
		tasks: 0,
		tiles: [{ value: '>' }],
		rule: {
			type: 'Special',
			description: 'Each',
		},
	}

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
