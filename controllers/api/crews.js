const Crew = require('./../../models/crew')
const Mission = require('./../../models/mission')
const MissionTracker = require('./../../models/missionTracker')

// Create a new Crew
const createCrew = async (req, res) => {
	try {
		const crew = new Crew({ ...req.body, user: req.user._id })
		await crew.save()

		// Fetch all the available missions
		const missions = await Mission.find()

		// Create a mission tracker for each mission
		const trackers = missions.map((mission) => {
			return {
				crew: crew._id,
				mission: mission._id,
			}
		})

		// Save all mission trackers
		await MissionTracker.insertMany(trackers)

		res.status(201).json({ crew, trackers })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// Get all Crews
const getAllCrews = async (req, res) => {
	try {
		const crews = await Crew.find({ user: req.user._id })
		res.status(200).json({ crews })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// Get a single Crew by ID
const getCrewById = async (req, res) => {
	try {
		const { id } = req.params
		const crew = await Crew.findOne({ _id: id, user: req.user._id })
		if (!crew) {
			return res.status(404).json({ error: 'Crew not found' })
		}
		res.status(200).json({ crew })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// Update a Crew by ID
const updateCrewById = async (req, res) => {
	try {
		const { id } = req.params
		// Using { runValidators: true } to ensure that update operation respects validation
		const crew = await Crew.findByIdAndUpdate(
			{ _id: id, user: req.user._id },
			req.body,
			{ new: true, runValidators: true } // This option enables validators
		)

		if (!crew) {
			return res.status(404).json({ error: 'Crew not found' })
		}
		res.status(200).json({ crew })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// Delete a Crew by ID
const deleteCrewById = async (req, res) => {
	try {
		const { id } = req.params
		const crew = await Crew.findOne({ _id: id, user: req.user._id })
		if (!crew) {
			return res.status(404).json({ error: 'Crew not found' })
		}

		await crew.remove() // This should trigger the pre('remove') middleware
		res.status(200).json({ message: 'Crew deleted successfully' })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

module.exports = {
	createCrew,
	getAllCrews,
	getCrewById,
	updateCrewById,
	deleteCrewById,
}
