const mongoose = require('mongoose')
const Mission = require('./mission')
const Crew = require('./crew')

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
		public: { type: Boolean, default: false },
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
		const missions = await Mission.find({ adventure: this._id })
		await Promise.all(missions.map((mission) => mission.remove()))
		const crews = await Crew.find({ adventure: this._id })
		await Promise.all(crews.map((crew) => crew.remove()))
		next()
	} catch (error) {
		next(error)
	}
})

module.exports = mongoose.model('Adventure', adventureSchema)
