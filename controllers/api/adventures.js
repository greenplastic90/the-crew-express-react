const Adventure = require('../../models/adventure')
const Mission = require('../../models/mission')

// Create a new Adventure
const createAdventure = async (req, res) => {
	try {
		const adventure = new Adventure({ ...req.body, owner: req.user._id })
		await adventure.save()
		res.status(201).json({ adventure })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

const getAllAdventures = async (req, res) => {
	try {
		// Fetch the official adventure
		const officialAdventure = await Adventure.findOne({ public: true, official: true }).populate(
			'owner'
		)

		// Fetch all other public adventures excluding the official one
		const otherAdventures = await Adventure.find({ public: true, official: false }).populate(
			'owner'
		)

		// Combine the results: official adventure first, followed by others
		const adventures = officialAdventure
			? [officialAdventure].concat(otherAdventures)
			: otherAdventures

		res.status(200).json({ adventures })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

const getAllAdventuresForAUser = async (req, res) => {
	try {
		const adventures = await Adventure.find({ owner: req.user._id }).populate('owner')
		res.status(200).json({ adventures })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// Get a single Adventure by ID
const getAdventureById = async (req, res) => {
	try {
		const { id } = req.params
		const adventure = await Adventure.findOne({ _id: id }).populate('owner')
		if (!adventure) {
			return res.status(404).json({ error: 'Adventure not found' })
		}
		const missions = await Mission.find({ adventure: id })
		if (!missions) {
			return res.status(404).json({ error: 'Missions not found' })
		}
		res.status(200).json({ adventure, missions })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// Get a single Adventure by ID to be updated
const getAdventureByIdToUpdate = async (req, res) => {
	try {
		const { id } = req.params
		const adventure = await Adventure.findOne({ _id: id, owner: req.user._id })
		if (!adventure) {
			return res.status(404).json({ error: 'Adventure not found' })
		}
		const missions = await Mission.find({ adventure: id })
		if (!missions) {
			return res.status(404).json({ error: 'Missions not found' })
		}
		res.status(200).json({ adventure, missions })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// Update an Adventure by ID
const updateAdventureById = async (req, res) => {
	try {
		const { id } = req.params

		// First, update the adventure itself
		const adventure = await Adventure.findByIdAndUpdate(
			{ _id: id, owner: req.user._id },
			req.body.adventure,
			{ new: true, runValidators: true }
		)

		if (!adventure) {
			return res.status(404).json({ error: 'Adventure not found' })
		}

		// Update missions in bulk
		if (req.body.missions && Array.isArray(req.body.missions)) {
			const bulkOps = req.body.missions.map((mission) => ({
				updateOne: {
					filter: { _id: mission._id },
					update: mission,
					upsert: false,
				},
			}))

			await Mission.bulkWrite(bulkOps)
		}

		res.status(200).json({ adventure })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// Delete an Adventure by ID
const deleteAdventureById = async (req, res) => {
	try {
		const { id } = req.params
		const adventure = await Adventure.findOne({ _id: id, owner: req.user._id })
		if (!adventure) {
			return res.status(404).json({ error: 'Adventure not found' })
		}
		await adventure.remove()
		res.status(200).json({ message: 'Adventure deleted successfully' })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

module.exports = {
	createAdventure,
	getAllAdventures,
	getAllAdventuresForAUser,
	getAdventureById,
	getAdventureByIdToUpdate,
	updateAdventureById,
	deleteAdventureById,
}
