const mongoose = require('mongoose')
const Adventure = require('../models/adventure')
const Mission = require('../models/mission')

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

		// Update all missions to reference the newly created Adventure
		await Mission.updateMany({}, { $set: { adventure: savedAdventure._id } })

		console.log('Missions updated!')
	} catch (error) {
		console.error('Error occurred:', error)
	}
}

// Connect to MongoDB and seed adventure & missions
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
		console.log('Adventure created and missions updated')
		mongoose.disconnect()
	})
	.catch((err) => {
		console.error('Something went wrong:', err)
		mongoose.disconnect()
	})
