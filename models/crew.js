const mongoose = require('mongoose')

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

// Validation function to limit array size
function arrayLimit(val) {
	return val.length <= 5
}

module.exports = mongoose.model('Crew', crewSchema)
