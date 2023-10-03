// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react'

const colors = {
	brand: {
		primary: 'rgba(215,105,50,1)',
		secondary: 'rgba(250,215,160,1)',
		redDark: 'rgba(175,55,51,1)',
		grey: 'rgba(237,237,237,1)',
		greyDark: 'rgba(191,191,191,1)',
		red: 'rgba(245, 80,45, 1)',
		green: 'rgba(100, 190, 110, 1)',
		yellow: 'rgba(225, 175, 70, 1)',
		pink: 'rgba(235, 125, 175, 1)',
		blue: 'rgba(0, 140, 205, 1)',
		blueDark: 'rgba(10, 80, 150, 1)',
		blueDark75: 'rgba(10, 80, 150, 0.75)',
		peach: 'rgba(225, 215, 176, 1)',
		purple: 'rgba(90, 5, 130, 1)',
		beige: 'rgba(210, 190, 175, 1)',
		beigeMedium: 'rgba(210, 190, 175, 0.75)',
		beigeLight: 'rgba(230, 220, 215, 1)',
	},
}
const fonts = {
	heading: 'Roboto Slab, sans-serif',
	body: 'PT Sans Narrow, sans-serif',
}

const components = {
	Heading: {
		baseStyle: {
			textTransform: 'uppercase',
			textShadow: '-1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff',
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
				fontFamily: 'Open Sans, sans-serif',
				fontSize: 'md',
			},
			logo: {
				fontFamily: 'Bree Serif, serif',
				// textShadow:
				// 	'-2px -2px 0 #ffffff, 2px -2px 0 #ffffff, -2px 2px 0 #ffffff, 2px 2px 0 #ffffff',
				fontSize: ['3xl', '4xl'],
				letterSpacing: '5px',
				background: `linear-gradient(to bottom, ${colors.brand.primary}, ${colors.brand.secondary})`,
				backgroundClip: 'text',
				color: 'transparent',
				position: 'absolute',
			},
			logo2: {
				fontFamily: 'Bree Serif, serif',
				textShadow:
					'-1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff',
				fontSize: ['3xl', '4xl'],
				letterSpacing: '5px',
			},
			handWritten: { fontFamily: 'Kaushan Script, cursive' },
		},
	},
	FormControl: {
		baseStyle: {
			marginBottom: 4,
		},
	},
	FormLabel: {
		baseStyle: {
			// styles for the FormLabel component
			fontSize: 'lg',
			fontWeight: 'bold',
			fontFamily: 'Roboto Slab, sans-serif',
			color: 'brand.blueDark',
			textShadow: '-1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff',
		},
	},
	Input: {
		baseStyle: {
			// styles for the Input component
			focusBorderColor: 'red !important',
			borderColor: 'red !important',
			color: 'red',
			// Add more styling here
		},
		variants: {
			forms: { focusBorderColor: 'red !important', borderColor: 'red !important' },
		},
	},
	Button: {
		variants: {
			attempts: { height: '20px', width: '50px', bg: 'white' },
			missionStart: {
				// bg: 'brand.blueDark',
				// color: 'white',
				_hover: {
					// bg: 'brand.blueDark', // Background color when hovered
				},
				_active: {
					// bg: 'brand.blueDark',
					// color: 'grey',
				},
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
