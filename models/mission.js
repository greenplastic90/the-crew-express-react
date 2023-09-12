const mongoose = require('mongoose')

// Rule subdocument schema
const RuleSchema = new mongoose.Schema({
	type: {
		type: String,
		enum: ['Comm', 'Assignment', 'Special', 'Ask & assign'],
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
		enum: ['1', '2', '3', '4', '5', '>', '>>', '>>>', '>>>>', 'Ω'],
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
	tasks: {
		type: Number,
	},
	taskTokens: {
		type: [TileSchema],
	},
	rules: {
		type: [RuleSchema],
	},
})

module.exports = mongoose.model('Mission', MissionSchema)
