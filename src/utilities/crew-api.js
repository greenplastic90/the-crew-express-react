import sendRequest from './send-request'
const BASE_URL = '/api/crews'

export function getallCrews() {
	return sendRequest(BASE_URL)
}
