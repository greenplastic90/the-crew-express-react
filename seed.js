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
			taskTokens: [{ value: '1' }, { value: '2' }],
		},
		{
			number: 4,
			tasks: 3,
		},
		{
			number: 5,
			rules: [
				{
					type: 'Ask & assign',
					description: 'Avoid taking any tricks',
				},
			],
		},
		{
			number: 6,
			tasks: 3,
			taskTokens: [{ value: '>' }, { value: '>>' }],
			rules: [
				{
					type: 'Comm',
					description: 'Interference',
				},
			],
		},
		{
			number: 7,
			tasks: 3,
			taskTokens: [{ value: 'Ω' }],
		},
		{
			number: 8,
			tasks: 3,
			taskTokens: [{ value: '1' }, { value: '2' }, { value: '3' }],
		},
		{
			number: 9,
			rules: [
				{
					type: 'Special',
					description: 'A non-rocket, 1-card must win a trick',
				},
			],
		},
		{
			number: 10,
			tasks: 4,
		},
		{
			number: 11,
			tasks: 4,
			taskTokens: [{ value: '1' }],
			rules: [
				{
					type: 'Special',
					description: 'Commander selects 1 crew who cannot communicate',
				},
			],
		},
		{
			number: 12,
			tasks: 4,
			taskTokens: [{ value: 'Ω' }],
			rules: [
				{
					type: 'Special',
					description:
						'After the 1st trick, each player takes a random card from the player to their right',
				},
			],
		},
		{
			number: 13,

			rules: [
				{
					type: 'Special',
					description: 'A trick must be won with each of the rocket cards',
				},
			],
		},
		{
			number: 14,
			tasks: 4,
			taskTokens: [{ value: '>' }, { value: '>>' }, { value: '>>>' }],
			rules: [
				{
					type: 'Comm',
					description: 'Interference',
				},
			],
		},
		{
			number: 15,
			tasks: 4,
			taskTokens: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }],
		},
		{
			number: 16,
			rules: [
				{
					type: 'Special',
					description: 'A trick may not be won with any 9-card',
				},
			],
		},
		{
			number: 17,
			tasks: 2,
			taskTokens: [{ value: '>' }],
			rules: [
				{
					type: 'Special',
					description: 'A trick may not be won with any 9-card',
				},
			],
		},
		{
			number: 18,
			tasks: 5,
			rules: [
				{
					type: 'Comm',
					description: 'Disrupted till 2nd trick',
				},
			],
		},
		{
			number: 19,
			tasks: 5,
			taskTokens: [{ value: '1' }],
			rules: [
				{
					type: 'Comm',
					description: 'Disrupted till 3rd trick',
				},
			],
		},
		{
			number: 20,
			tasks: 2,
			rules: [
				{
					type: 'Assignment',
					description: 'Solo',
				},
			],
		},
		{
			number: 21,
			tasks: 5,
			taskTokens: [{ value: '1' }, { value: '2' }],
			rules: [
				{
					type: 'Comm',
					description: 'Interference',
				},
			],
		},
		{
			number: 22,
			tasks: 5,
			taskTokens: [{ value: '>' }, { value: '>>' }, { value: '>>>' }, { value: '>>>>' }],
		},
		{
			number: 23,
			tasks: 5,
			taskTokens: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }],
			rules: [
				{
					type: 'Special',
					description: 'Before selecting tasks, the positions of 2 taskTokens may be swapped',
				},
			],
		},
		{
			number: 24,
			tasks: 6,
			rules: [
				{
					type: 'Assignment',
					description: 'Group',
				},
			],
		},
		{
			number: 25,
			fivePlayerRule: true,
			tasks: 6,
			taskTokens: [{ value: '>' }, { value: '>>' }],
			rules: [
				{
					type: 'Comm',
					description: 'Interference',
				},
			],
		},
		{
			number: 26,
			rules: [
				{
					type: 'Special',
					description: '2 non-rocket, 1-cards must win a trick each',
				},
			],
		},
		{
			number: 27,
			fivePlayerRule: true,
			tasks: 3,
			rules: [
				{
					type: 'Assignment',
					description: 'Solo',
				},
			],
		},
		{
			number: 28,
			fivePlayerRule: true,
			tasks: 6,
			taskTokens: [{ value: '1' }, { value: 'Ω' }],
			rules: [
				{
					type: 'Comm',
					description: 'Disrupted till 3rd trick',
				},
			],
		},
		{
			number: 29,
			rules: [
				{ type: 'Comm', description: 'Interference' },
				{
					type: 'Special',
					description: ' At no point may a player have won 2 tricks more than any other player',
				},
			],
		},
		{
			number: 30,
			fivePlayerRule: true,
			tasks: 6,
			taskTokens: [{ value: '>' }, { value: '>>' }, { value: '>>>' }],
			rules: [
				{
					type: 'Comm',
					description: 'Disrupted till 2nd trick',
				},
			],
		},
		{
			number: 31,
			fivePlayerRule: true,
			tasks: 6,
			taskTokens: [{ value: '1' }, { value: '2' }, { value: '3' }],
		},
		{
			number: 32,
			fivePlayerRule: true,
			tasks: 7,
			rules: [
				{
					type: 'Assignment',
					description: 'Group',
				},
			],
		},
		{
			number: 33,
			rules: [
				{
					type: 'Ask & assign',
					description: 'Win exactly 1 trick; trick cannot be won using a rocket card',
				},
			],
		},
		{
			number: 34,
			rules: [
				{
					type: 'Special',
					description:
						'Commander must win the 1st and last tricks. At no point may any player have won 2 tricks more than any other player.',
				},
			],
		},
		{
			number: 35,
			fivePlayerRule: true,
			tasks: 7,
			taskTokens: [{ value: '>' }, { value: '>>' }, { value: '>>>' }],
		},
		{
			number: 36,
			fivePlayerRule: true,
			tasks: 7,
			taskTokens: [{ value: '1' }, { value: '2' }],
			rules: [
				{
					type: 'Assignment',
					description: 'Group',
				},
			],
		},
		{
			number: 37,
			fivePlayerRule: true,
			tasks: 4,
			rules: [
				{
					type: 'Assignment',
					description: 'Solo',
				},
			],
		},
		{
			number: 38,
			fivePlayerRule: true,
			tasks: 8,
			rules: [
				{
					type: 'Comm',
					description: 'Disrupted till 3rd trick',
				},
			],
		},
		{
			number: 39,
			fivePlayerRule: true,
			tasks: 8,
			taskTokens: [{ value: '>' }, { value: '>>' }, { value: '>>>' }],
			rules: [
				{
					type: 'Comm',
					description: 'Interference',
				},
			],
		},
		{
			number: 40,
			fivePlayerRule: true,
			tasks: 8,
			taskTokens: [{ value: '1' }, { value: '2' }, { value: '3' }],
			rules: [
				{
					type: 'Special',
					description:
						'Before selecting tasks, 1 tile may be moved to a task that does not have a tile',
				},
			],
		},
		{
			number: 41,
			rules: [
				{
					type: 'Ask & assign',
					description:
						'Win only the 1st and last tricks; these tricks cannot be won using rocket cards',
				},
			],
		},
		{
			number: 42,
			fivePlayerRule: true,
			tasks: 9,
		},
		{
			number: 43,
			fivePlayerRule: true,
			tasks: 9,
			rules: [
				{
					type: 'Assignment',
					description: 'Group',
				},
			],
		},
		{
			number: 44,
			rules: [
				{
					type: 'Special',
					description: 'Each rocket card must win a trick in ascending order',
				},
			],
		},
		{
			number: 45,
			fivePlayerRule: true,
			tasks: 9,
			taskTokens: [{ value: '>' }, { value: '>>' }, { value: '>>>' }],
		},
		{
			number: 46,
			rules: [
				{
					type: 'Special',
					description:
						'The player with the red 9 identifies themselves; the player to their left must win every red card',
				},
			],
		},
		{
			number: 47,
			fivePlayerRule: true,
			tasks: 10,
		},
		{
			number: 48,
			fivePlayerRule: true,
			tasks: 3,
			taskTokens: [{ value: 'Ω' }],
			rules: [
				{
					type: 'Special',
					description: 'The Ω task must be completed on the final trick',
				},
			],
		},
		{
			number: 49,
			fivePlayerRule: true,
			tasks: 10,
			taskTokens: [{ value: '>' }, { value: '>>' }, { value: '>>>' }],
		},
		{
			number: 50,
			rules: [
				{
					type: 'Special',
					description:
						'1 player must win the first 4 tricks, another must win the final trick, and the others must win the rest of the tricks. Decide roles as a group before play begins.',
				},
			],
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
