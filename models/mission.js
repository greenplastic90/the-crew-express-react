const mongoose = require('mongoose')

// Rule subdocument schema
const RuleSchema = new mongoose.Schema({
	type: {
		type: String,
		enum: ['Comm', 'Assignment', 'Special'],
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
})

// Tile subdocument schema
const TileSchema = new mongoose.Schema({
	value: {
		type: String,
		enum: ['1', '2', '3', '4', '5', '>', '>>', '>>>', 'Ω'],
		required: true,
	},
})

// Mission schema
const MissionSchema = new mongoose.Schema({
	number: {
		type: Number,
		required: true,
	},
	fivePlayerRule: {
		type: Boolean,
		default: false,
	},
	attempts: {
		type: Number,
		default: 0,
	},
	distressSignal: {
		type: Boolean,
		default: false,
	},
	tasks: {
		type: Number,
		required: true,
	},
	tiles: {
		type: [TileSchema],
	},
	rule: {
		type: RuleSchema,
		required: true,
	},
})

module.exports = mongoose.model('Mission', MissionSchema)
