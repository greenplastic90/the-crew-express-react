const mongoose = require('mongoose')

const MissionTrackerSchema = new mongoose.Schema({
	crew: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Crew',
		required: true,
	},
	mission: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Mission',
		required: true,
	},
	attempts: {
		type: Number,
		default: 0,
	},
	distressSignalUsed: {
		type: Boolean,
		default: false,
	},
	completed: {
		type: Boolean,
		default: false,
	},
})

module.exports = mongoose.model('MissionTracker', MissionTrackerSchema)
