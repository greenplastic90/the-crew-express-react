const Mission = require('./../../models/mission')

// Create a new Mission
exports.createMission = async (req, res) => {
	try {
		const mission = new Mission(req.body)
		await mission.save()
		res.status(201).json({ mission })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// Get all Missions
exports.getAllMissions = async (req, res) => {
	try {
		const missions = await Mission.find({})
		res.status(200).json({ missions })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// Get Mission by ID
exports.getMissionById = async (req, res) => {
	try {
		const { id } = req.params
		const mission = await Mission.findById(id)
		if (!mission) {
			return res.status(404).json({ error: 'Mission not found' })
		}
		res.status(200).json({ mission })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// Update Mission by ID
exports.updateMissionById = async (req, res) => {
	try {
		const { id } = req.params
		const mission = await Mission.findByIdAndUpdate(id, req.body, { new: true })
		if (!mission) {
			return res.status(404).json({ error: 'Mission not found' })
		}
		res.status(200).json({ mission })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// Delete Mission by ID
exports.deleteMissionById = async (req, res) => {
	try {
		const { id } = req.params
		const mission = await Mission.findByIdAndDelete(id)
		if (!mission) {
			return res.status(404).json({ error: 'Mission not found' })
		}
		res.status(200).json({ message: 'Mission deleted successfully' })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}
