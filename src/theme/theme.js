// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react'

const colors = {
	brand: {
		red: 'rgba(245, 80,45, 1)',
		green: 'rgba(100, 190, 110, 1)',
		yellow: 'rgba(225, 175, 70, 1)',
		pink: 'rgba(235, 125, 175, 1)',
		blue: 'rgba(0, 140, 205, 1)',
		peach: 'rgba(225, 215, 176, 1)',
		purple: 'rgba(90, 5, 130, 1)',
	},
}

const theme = extendTheme({
	colors,
})

export default theme
