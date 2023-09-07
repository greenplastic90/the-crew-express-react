import sendRequest from './send-request'
const BASE_URL = '/api/mission-tracker'

export function getMissionTrackerById(id) {
	return sendRequest(`${BASE_URL}/${id}`)
}
