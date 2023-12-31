import sendRequest from './send-request'
const BASE_URL = '/api/missions'

export function createMission(mission) {
	return sendRequest(BASE_URL, 'POST', mission)
}

export function deleteMissionById(id) {
	return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}
