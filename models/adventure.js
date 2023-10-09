const mongoose = require('mongoose')
const Mission = require('./mission')

const adventureSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		official: { type: Boolean, default: false },
		likes: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
	},
	{
		timestamps: true,
	}
)
adventureSchema.pre('remove', async function (next) {
	try {
		await Mission.deleteMany({ adventure: this._id })
		next()
	} catch (error) {
		next(error)
	}
})

module.exports = mongoose.model('Adventure', adventureSchema)
