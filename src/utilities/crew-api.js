import sendRequest from './send-request'
const BASE_URL = '/api/crews'

export function getAllCrews() {
	return sendRequest(BASE_URL)
}

export function getCrewById(id) {
	return sendRequest(`${BASE_URL}/${id}`)
}

export function createCrew(crew) {
	return sendRequest(BASE_URL, 'POST', crew)
}

export function deleteCrewById(id) {
	return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}
