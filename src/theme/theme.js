// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react'

const colors = {
	brand: {
		red: 'rgba(245, 80,45, 1)',
		green: 'rgba(100, 190, 110, 1)',
		yellow: 'rgba(225, 175, 70, 1)',
		pink: 'rgba(235, 125, 175, 1)',
		blue: 'rgba(0, 140, 205, 1)',
		blueDark: 'rgba(10, 80, 150, 1)',
		peach: 'rgba(225, 215, 176, 1)',
		purple: 'rgba(90, 5, 130, 1)',
		beige: 'rgba(210, 190, 175, 1)',
		beigeLight: 'rgba(230, 220, 215, 1)',
	},
}
const fonts = {
	heading: 'Roboto Slab, sans-serif',
	body: 'Roboto, sans-serif',
}

const components = {
	Heading: {
		baseStyle: {
			textShadow: '-2px -2px 0 #ffffff, 2px -2px 0 #ffffff, -2px 2px 0 #ffffff, 2px 2px 0 #ffffff',
			color: 'brand.blueDark',
			letterSpacing: '3px',
		},
		variants: {},
	},
	Text: {
		variants: {
			outline: {
				textShadow:
					'-1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff',
			},
			missionDesc: {
				fontFamily: 'PT Sans Narrow, sans-serif',
				fontSize: 'lg',
			},
		},
	},
}

const theme = extendTheme({
	colors,
	fonts,
	components,
})

export default theme
