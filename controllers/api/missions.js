const Mission = require('./../../models/mission')
const MissionTracker = require('./../../models/missionTracker')
const Crew = require('./../../models/crew')

// Create a new Mission
exports.createMission = async (req, res) => {
	try {
		const mission = new Mission(req.body)
		await mission.save()

		// Find all Crew members associated with the adventure ID
		const crews = await Crew.find({ adventure: mission.adventure })

		// For each crew member, create a new MissionTracker
		const missionTrackers = crews.map((crew) => ({
			crew: crew._id,
			mission: mission._id,
		}))

		// Save all missionTrackers
		await MissionTracker.insertMany(missionTrackers)

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

// Delete Mission by ID and then fetch all missions associated with that mission's adventure ID
exports.deleteMissionById = async (req, res) => {
	try {
		const { id } = req.params

		const missionToDelete = await Mission.findById(id)
		if (!missionToDelete) {
			return res.status(404).json({ error: 'Mission not found' })
		}

		const adventureId = missionToDelete.adventure
		const deletedMissionNumber = missionToDelete.number

		// Delete the mission
		await missionToDelete.remove()

		// Fetch missions with a number greater than the deleted mission's number and belonging to the same adventure
		const missionsToUpdate = await Mission.find({
			adventure: adventureId,
			number: { $gt: deletedMissionNumber },
		})

		const bulkOps = missionsToUpdate.map((mission) => {
			return {
				updateOne: {
					filter: { _id: mission._id },
					update: { $inc: { number: -1 } }, // decrement number by 1
				},
			}
		})

		if (bulkOps.length > 0) {
			await Mission.bulkWrite(bulkOps)
		}

		// Fetch all missions for the adventure again (if required)
		const relatedMissions = await Mission.find({ adventure: adventureId })

		res.status(200).json({
			message: 'Mission deleted successfully',
			missions: relatedMissions,
		})
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}
