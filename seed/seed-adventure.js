const mongoose = require('mongoose')
const Adventure = require('../models/adventure')
const Mission = require('../models/mission')
const Crew = require('../models/crew') // Import the Crew model

require('dotenv').config()

async function seedAdventureAndMissions() {
	// Create the new Adventure
	const newAdventure = new Adventure({
		name: 'The Quest For Planet Nine',
		description: 'Official Adventure',
		owner: '65193546861d4fa8f9642894',
		official: true,
	})

	try {
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
