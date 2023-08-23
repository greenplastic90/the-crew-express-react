// Serice modules hold the code that implements
// "business"/application logic
// Service methods often depend upon or use
// methods in the API modules

// Import all named exports
import * as usersAPI from './users-api'

export async function signUp(userData) {
	// Delegate the AJAX request to the users-api.js
	// module.
	const token = await usersAPI.signUp(userData)
	localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, token)
	return getUser()
}

export function getToken() {
	// getItem will return null if the key does not exist
	const token = localStorage.getItem(process.env.REACT_APP_TOKEN_NAME)
	if (!token) return null
	// Let's check if token has expired...
	const payload = JSON.parse(atob(token.split('.')[1]))
	// A JWT's exp is expressed in seconds, not milliseconds, so convert
	if (payload.exp < Date.now() / 1000) {
		// Token has expired
		localStorage.removeItem(process.env.REACT_APP_TOKEN_NAME)
		return null
	}
	return token
}

export function getUser() {
	const token = getToken()
	return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export function logOut() {
	localStorage.removeItem(process.env.REACT_APP_TOKEN_NAME)
}

export async function login(credentials) {
	// Delegate the AJAX request to the users-api.js
	// module.
	const token = await usersAPI.login(credentials)
	localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, token)
	return getUser()
}

export function checkToken() {
	return usersAPI.checkToken().then((dateStr) => new Date(dateStr))
}
