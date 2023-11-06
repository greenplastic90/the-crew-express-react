const mongoose = require('mongoose')
const Adventure = require('../models/adventure')
const Mission = require('../models/mission')
const Crew = require('../models/crew')
const User = require('../models/user')

require('dotenv').config()

async function seedAdventureAndMissions() {
	try {
		// First, find the user by username
		const user = await User.findOne({ username: 'Greenplastic90' })
		if (!user) {
			throw new Error('User not found')
		}

		// Create the new Adventure
		const newAdventure = new Adventure({
			name: 'The Quest For Planet Nine',
			description: 'Official Adventure',
			owner: user._id,
			official: true,
			public: true,
		})

		const savedAdventure = await newAdventure.save()
		console.log('Adventure saved:', savedAdventure)

		// Update only those missions that don't already have an adventure set
		await Mission.updateMany(
			{ adventure: { $exists: false } },
			{ $set: { adventure: savedAdventure._id } }
		)
		console.log('Missions updated!')

		// Update only those crews that don't already have an adventure set
		await Crew.updateMany(
			{ adventure: { $exists: false } },
			{ $set: { adventure: savedAdventure._id } }
		)
		console.log('Crews updated!')
	} catch (error) {
		console.error('Error occurred:', error)
	}
}

// Connect to MongoDB and seed adventure, missions & crews
mongoose
	.connect(process.env.DATABASE_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('MongoDB connected')
		return seedAdventureAndMissions()
	})
	.then(() => {
		console.log('Adventure created, and missions & crews updated')
		mongoose.disconnect()
	})
	.catch((err) => {
		console.error('Something went wrong:', err)
		mongoose.disconnect()
	})
