const mongoose = require('mongoose')
const missionTracker = require('./missionTracker')

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
})

crewSchema.pre('remove', async function (next) {
	// Remove all MissionTracker documents that reference the removed Crew
	await missionTracker.deleteMany({ crew: this._id })

	next()
})

// Validation function to limit array size
function arrayLimit(val) {
	return val.length <= 5
}

module.exports = mongoose.model('Crew', crewSchema)
