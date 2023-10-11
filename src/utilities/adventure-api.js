import sendRequest from './send-request'
const BASE_URL = '/api/adventures'

export function getAllAdventures() {
	return sendRequest(BASE_URL)
}

export function getAllAdventuresForAUser() {
	return sendRequest(`${BASE_URL}/user`)
}

export function getAdventureById(id) {
	return sendRequest(`${BASE_URL}/${id}`)
}

export function getAdventureByIdToUpdate(id) {
	return sendRequest(`${BASE_URL}/${id}/toUpdate`)
}

export function createAdventure(adventure) {
	return sendRequest(BASE_URL, 'POST', adventure)
}

export function updateAdventure(adventure, adventureId) {
	return sendRequest(`${BASE_URL}/${adventureId}`, 'PUT', adventure)
}

export function deleteAdventureById(id) {
	return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}
