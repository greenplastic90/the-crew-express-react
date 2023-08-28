const MissionTracker = require('../../models/missionTracker')
const Crew = require('../../models/crew')

// Get all MissionTrackers by Crew ID
const getAllByCrewId = async (req, res) => {
	try {
		const missionTrackers = await MissionTracker.find({ crew: req.params.crewId })
		res.status(200).send({ missionTrackers })
	} catch (error) {
		res.status(500).send(error)
	}
}

// Get MissionTracker by ID
const getById = async (req, res) => {
	try {
		const missionTracker = await MissionTracker.findById(req.params.id)

		if (!missionTracker) {
			return res.status(404).send()
		}

		// Check if the user is the owner of the Crew
		const crew = await Crew.findById(missionTracker.crew)
		if (String(crew.owner) !== String(req.user._id)) {
			return res.status(403).send({ error: 'Not authorized to access this resource' })
		}

		res.status(200).send({ missionTracker })
	} catch (error) {
		res.status(500).send(error)
	}
}

// Create a new MissionTracker
const create = async (req, res) => {
	try {
		const { crewId, missionId } = req.params

		// Check if a MissionTracker with the same crew and mission IDs already exists
		const existingMissionTracker = await MissionTracker.findOne({
			crew: crewId,
			mission: missionId,
		})

		if (existingMissionTracker) {
			return res
				.status(400)
				.send({ error: 'MissionTracker for this mission already exists for this crew' })
		}

		const newMissionTracker = new MissionTracker({ crew: crewId, mission: missionId })
		await newMissionTracker.save()
		res.status(201).send({ newMissionTracker })
	} catch (error) {
		res.status(400).send(error)
	}
}

// Update MissionTracker by ID
const update = async (req, res) => {
	const updates = Object.keys(req.body)
	const allowedUpdates = ['attempts', 'distressSignalUsed', 'completed']
	const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

	if (!isValidOperation) {
		return res.status(400).send({ error: 'Invalid updates!' })
	}

	try {
		const missionTracker = await MissionTracker.findById(req.params.id)
		if (!missionTracker) {
			return res.status(404).send()
		}

		updates.forEach((update) => (missionTracker[update] = req.body[update]))
		await missionTracker.save()
		res.status(200).send({ missionTracker })
	} catch (error) {
		res.status(400).send(error)
	}
}

// Delete MissionTracker by ID
const remove = async (req, res) => {
	try {
		const missionTracker = await MissionTracker.findByIdAndDelete(req.params.id)
		if (!missionTracker) {
			return res.status(404).send()
		}
		res.status(200).send({ missionTracker })
	} catch (error) {
		res.status(500).send(error)
	}
}

module.exports = {
	getAllByCrewId,
	getById,
	create,
	update,
	remove,
}
