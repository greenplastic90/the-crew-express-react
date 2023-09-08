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
		required: true,
		validate: {
			validator: function (v) {
				return v !== null
			},
			message: 'attempts cannot be null',
		},
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
