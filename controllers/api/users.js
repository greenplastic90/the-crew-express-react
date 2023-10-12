const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../../models/user')

module.exports = {
	create,
	login,
	checkToken,
	deleteUser,
}

function checkToken(req, res) {
	console.log(req.user)
	res.json(req.exp)
}

async function login(req, res) {
	try {
		const user = await User.findOne({ email: req.body.email })
		if (!user) throw new Error()
		const match = await bcrypt.compare(req.body.password, user.password)
		if (!match) throw new Error()
		const token = createJWT(user)
		res.json({ token, user })
	} catch {
		res.status(400).json({ error: 'Bad Credentials' })
	}
}

async function create(req, res) {
	const { username, email, password } = req.body
	const errors = {}

	try {
		const existingUsername = await User.findOne({ username })
		if (existingUsername) {
			errors.username = 'Username already in use'
		}

		const existingEmail = await User.findOne({ email })
		if (existingEmail) {
			errors.email = 'Email already in use'
		}

		if (password.length < 3) {
			errors.password = 'Password must be at least 3 characters long'
		}

		if (Object.keys(errors).length > 0) {
			return res.status(400).json({ errors })
		}

		// Create the new user since all checks passed
		const user = await User.create(req.body)
		const token = createJWT(user)
		res.json({ token, user })
	} catch (err) {
		console.error(err)
		res.status(400).json(err)
	}
}

/*-- Helper Functions --*/
function createJWT(user) {
	return jwt.sign(
		// extra data for the payload
		{ user },
		process.env.SECRET,
		{ expiresIn: '7d' }
	)
}

async function deleteUser(req, res) {
	try {
		// Find the user by the ID passed in the request
		const user = await User.findById(req.params.id)

		// If user not found, send a 404 response
		if (!user) return res.status(404).json({ error: 'User not found' })

		// Remove the user
		await user.remove()

		// Send a successful response
		res.status(200).json({ message: 'User deleted successfully' })
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Internal Server Error' })
	}
}
