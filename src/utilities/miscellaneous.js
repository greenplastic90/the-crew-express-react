export function formatDate(dateString) {
	const date = new Date(dateString)
	const day = String(date.getDate()).padStart(2, '0')
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const year = date.getFullYear()

	return `${day}-${month}-${year}`
}

export function astroColorPicker(index) {
	switch (index) {
		case 0:
			return 'brand.green'
		case 1:
			return 'brand.yellow'
		case 2:
			return 'brand.blue'
		case 3:
			return 'brand.pink'
		default:
			return 'black'
	}
}
