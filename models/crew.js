const mongoose = require('mongoose')
const MissionTracker = require('./missionTracker')

const crewSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	memberNames: {
		type: [String],
		validate: [arrayLimit, 'Exceeds the limit of 5 members'],
	},
	startDate: {
		type: Date,
		default: Date.now,
	},
	finishDate: {
		type: Date,
	},
	adventure: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Adventure',
		required: true,
	},
})

crewSchema.pre('remove', async function (next) {
	// Remove all MissionTracker documents that reference the removed Crew
	await MissionTracker.deleteMany({ crew: this._id })
	next()
})

// Validation function to limit array size
function arrayLimit(val) {
	return val.length <= 5
}

crewSchema.methods.getTotalAttempts = async function () {
	const trackers = await MissionTracker.find({ crew: this._id })
	const totalAttempts = trackers.reduce((acc, tracker) => {
		return acc + (tracker.attempts || 0)
	}, 0)
	return totalAttempts
}

module.exports = mongoose.model('Crew', crewSchema)
