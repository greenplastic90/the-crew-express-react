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

export const parseBoldText = (text) => {
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
