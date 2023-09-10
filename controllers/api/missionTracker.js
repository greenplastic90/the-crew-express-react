const MissionTracker = require('../../models/missionTracker')
const Crew = require('../../models/crew')
const Mission = require('../../models/mission')

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
			return res.status(404).send({ error: 'MissionTracker not found' })
		}

		// Check if the user is the owner of the Crew
		const crew = await Crew.findById(missionTracker.crew)
		if (String(crew.user) !== String(req.user._id)) {
			return res.status(403).send({ error: 'Not authorized to access this resource' })
		}

		// Fetch the mission related to the mission tracker
		const mission = await Mission.findById(missionTracker.mission)
		if (!mission) {
			return res.status(404).send({ error: 'Mission not found' })
		}

		let prevMissionTracker = null
		let nextMissionTracker = null

		// Find the previous mission based on mission number (assuming mission has a 'number' field)
		if (mission.number > 1) {
			const prevMission = await Mission.findOne({ number: mission.number - 1 })
			if (prevMission) {
				prevMissionTracker = await MissionTracker.findOne({
					mission: prevMission._id,
					crew: missionTracker.crew,
				})
			}
		}

		// Find the next mission based on mission number
		const nextMission = await Mission.findOne({ number: mission.number + 1 })
		if (nextMission) {
			nextMissionTracker = await MissionTracker.findOne({
				mission: nextMission._id,
				crew: missionTracker.crew,
			})
		}

		res.status(200).send({
			tracker: missionTracker,
			mission,
			adjacentMissions: {
				prevMissionTracker: prevMissionTracker ? prevMissionTracker._id : null,
				nextMissionTracker: nextMissionTracker ? nextMissionTracker._id : null,
			},
		})
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

		// After updating the MissionTracker, check if all are completed for the same crew
		const allTrackers = await MissionTracker.find({ crew: missionTracker.crew })

		const allCompleted = allTrackers.every((tracker) => tracker.completed)

		if (allCompleted) {
			// Update finishDate in the Crew model to the current date
			await Crew.findByIdAndUpdate(missionTracker.crew, { finishDate: new Date() }, { new: true })
		}

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
