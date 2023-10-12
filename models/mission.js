const mongoose = require('mongoose')
const MissionTracker = require('./missionTracker')

// Tile subdocument schema
const TileSchema = new mongoose.Schema({
	value: {
		type: String,
		enum: ['1', '2', '3', '4', '5', '>', '>>', '>>>', '>>>>', 'Ω'],
		required: true,
	},
})

// Mission schema
const MissionSchema = new mongoose.Schema({
	adventure: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Adventure',
		required: true,
	},
	number: {
		type: Number,
		required: true,
	},
	fivePlayerRule: {
		type: Boolean,
		default: false,
	},
	tasks: {
		type: Number,
	},
	taskTokens: {
		type: [TileSchema],
	},
	description: {
		type: String,
	},
})

MissionSchema.pre('remove', async function (next) {
	// Remove all MissionTracker documents that reference the removed Mission
	await MissionTracker.deleteMany({ mission: this._id })
	next()
})

module.exports = mongoose.model('Mission', MissionSchema)
