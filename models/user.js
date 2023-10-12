const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const Adventure = require('./adventure')
const Crew = require('./crew')

const SALT_ROUNDS = 6

const userSchema = new Schema(
	{
		username: { type: String, required: true, unique: true },
		email: {
			type: String,
			unique: true,
			trim: true,
			lowercase: true,
			required: true,
		},
		password: {
			type: String,
			trim: true,
			minlength: 3,
			required: true,
		},
	},
	{
		timestamps: true,
		toJSON: {
			transform: function (doc, ret) {
				delete ret.password
				return ret
			},
		},
	}
)

userSchema.pre('save', async function (next) {
	// 'this' is the user doc
	if (!this.isModified('password')) return next()
	// the password is either new, or being updated
	this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
})

userSchema.pre('remove', async function (next) {
	// Remove all Adventures that have this user as the owner
	await Adventure.deleteMany({ owner: this._id })
	// Remove all Crews that have this user
	await Crew.deleteMany({ user: this._id })
	next()
})

module.exports = mongoose.model('User', userSchema)
