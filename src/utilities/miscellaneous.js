export function formatDate(dateString) {
	const date = new Date(dateString)
	const day = String(date.getDate()).padStart(2, '0')
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const year = date.getFullYear()

	return `${day}-${month}-${year}`
}

export function randomBetweenZeroAndFive() {
	return Math.floor(Math.random() * 6)
}

export function astroColorPicker(index) {
	switch (index) {
		case 0:
			// return 'brand.green'
			return 'rgba(100, 190, 110, 1)'
		case 1:
			// return 'brand.yellow'
			return 'rgba(225, 175, 70, 1)'
		case 2:
			// return 'brand.blue'
			return 'rgba(0, 140, 205, 1)'
		case 3:
			// return 'brand.pink'
			return 'rgba(235, 125, 175, 1)'
		default:
			return 'black'
	}
}

export const parseBoldText = (text) => {
	// Check if the input text is not a string
	if (typeof text !== 'string') {
		return ''
	}

	const reg = /\[b\](.*?)\[\/b\]/g // Regular expression to find [b]...[/b] in the text
	const splitText = text.split(reg) // Split the text into an array
	let key = 0 // React list key

	// Parse the array and create JSX elements for text and [b]text[/b]
	return splitText.map((chunk, index) => {
		if (index % 2 === 0) {
			// regular text
			return chunk
		} else {
			// [b]...[/b] text
			key += 1 // Update React list key
			return <strong key={key}>{chunk}</strong>
		}
	})
}
