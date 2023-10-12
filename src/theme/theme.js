// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react'

const colors = {
	brand: {
		brown: {
			50: 'rgba(245, 220, 207,1)',
			100: 'rgba(234, 192, 177,1)',
			200: 'rgba(224, 163, 146,1)',
			300: 'rgba(213, 134, 114,1)',
			400: 'rgba(203, 106, 83,1)',
			500: 'rgba(193, 77, 51,1)',
			600: 'rgba(173, 69, 45,1)',
			700: 'rgba(144, 57, 37,1)',
			800: 'rgba(115, 46, 29,1)',
			900: 'rgba(86, 34, 22,1)',
		},
		greenPine: {
			50: 'rgba(153, 245, 240,1)',
			100: 'rgba(102, 229, 221,1)',
			200: 'rgba(51, 213, 204,1)',
			300: 'rgba(3, 197, 188,1)',
			400: 'rgba(3, 169, 160,1)',
			500: 'rgba(3, 141, 132,1)',
			600: 'rgba(3, 113, 104,1)',
			700: 'rgba(2, 89, 82,1)',
			800: 'rgba(2, 65, 60,1)',
			900: 'rgba(2, 41, 38,1)',
		},
		blueYale: {
			50: 'rgba(163, 209, 242,1)',
			100: 'rgba(123, 170, 219,1)',
			200: 'rgba(82, 130, 196,1)',
			300: 'rgba(42, 91, 174,1)',
			400: 'rgba(28, 73, 150,1)',
			500: 'rgba(13, 59, 102)',
			600: 'rgba(10, 47, 81,1)',
			700: 'rgba(8, 37, 62,1)',
			800: 'rgba(6, 27, 43,1)',
			900: 'rgba(3, 17, 24,1)',
		},
		silver: {
			50: 'rgba(243, 243, 243,1)',
			100: 'rgba(235, 235, 235,1)',
			200: 'rgba(223, 223, 223,1)',
			300: 'rgba(207, 207, 207,1)',
			400: 'rgba(199, 199, 199,1)',
			500: 'rgba(191, 191, 191,1)',
			600: 'rgba(175, 175, 175,1)',
			700: 'rgba(159, 159, 159,1)',
			800: 'rgba(143, 143, 143,1)',
			900: 'rgba(127, 127, 127,1)',
		},
		antiFlashWhite: {
			50: 'rgba(251, 251, 251,1)',
			100: 'rgba(249, 249, 249,1)',
			200: 'rgba(245, 245, 245,1)',
			300: 'rgba(241, 241, 241,1)',
			400: 'rgba(239, 239, 239,1)',
			500: 'rgba(237, 237, 237,1)',
			600: 'rgba(231, 231, 231,1)',
			700: 'rgba(225, 225, 225,1)',
			800: 'rgba(219, 219, 219,1)',
			900: 'rgba(213, 213, 213,1)',
		},
		platinum: {
			50: 'rgba(241, 243, 248,1)',
			100: 'rgba(237, 239, 245,1)',
			200: 'rgba(228, 231, 239,1)',
			300: 'rgba(220, 223, 233,1)',
			400: 'rgba(218, 221, 230,1)',
			500: 'rgba(216, 219, 226,1)',
			600: 'rgba(204, 207, 215,1)',
			700: 'rgba(193, 196, 204,1)',
			800: 'rgba(181, 184, 192,1)',
			900: 'rgba(166, 169, 178,1)',
		},

		secondary: 'rgba(250,215,160,1)',
		redDark: 'rgba(175,55,51,1)',
		gray: 'rgba(237,237,237,1)',
		grayDark: 'rgba(191,191,191,1)',
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
	body: 'Martian Mono, monospace',
}

const components = {
	Heading: {
		baseStyle: {
			textShadow: '-1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff',
			color: 'brand.blueDark',
		},
		variants: {
			crew: { color: 'brand.brown.500' },
			adventure: {
				color: 'brand.blueYale.500',
			},
		},
	},
	Text: {
		variants: {
			outline: {
				textShadow:
					'-1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff',
			},
			description: {
				fontFamily: 'Open Sans, sans-serif',
			},
			logo: {
				fontFamily: 'Oswald, sans-serif',
				fontSize: ['3xl', '4xl'],
				letterSpacing: '5px',
				background: `linear-gradient(to bottom, ${colors.brand.blueYale[800]}, ${colors.brand.blueYale[300]})`,
				backgroundClip: 'text',
				color: 'transparent',
				position: 'absolute',
			},
			logo2: {
				fontFamily: 'Oswald, sans-serif',
				textShadow:
					'-1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff',
				fontSize: ['3xl', '4xl'],
				letterSpacing: '5px',
			},
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
			fontSize: '2xl',
			fontWeight: 'bold',
			fontFamily: 'Roboto Slab, sans-serif',
			color: 'brand.blueDark',
			textShadow: '-1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff',
		},
	},
	Input: {
		variants: {
			default: {
				field: {
					border: `2px solid ${colors.brand.grayDark}`,
					bg: 'white',
				},
			},
		},
		defaultProps: {
			variant: 'default',
		},
	},
	Textarea: {
		variants: {
			default: {
				border: `2px solid ${colors.brand.grayDark}`,
				bg: 'white',
			},
		},
		defaultProps: {
			variant: 'default',
		},
	},
	Checkbox: {
		variants: {
			default: {
				control: {
					borderColor: colors.brand.grayDark,
					bg: 'white',
					_hover: {
						bg: colors.brand.blueYale[600],
						// borderColor: colors.brand.blueYale[400],
					},
					_checked: {
						bg: colors.brand.blueYale[500],
						// borderColor: colors.brand.blueYale[500],
						color: 'white',
					},
					// _focus: {
					// 	boxShadow: `0 0 0 2px ${colors.brand.blueYale[300]}`, // or customize it as per your preference
					// },
				},
				icon: {
					size: '1.25em',
					color: 'white',
				},
			},
		},
		defaultProps: {
			variant: 'default',
			colorScheme: 'greenPine',
		},
	},

	Button: {
		baseStyle: {
			size: 'sm',
		},
		variants: {
			attempts: {
				height: '20px',
				width: '50px',
				bg: colors.brand.platinum[500],
				color: 'black',
				_hover: {
					bg: colors.brand.platinum[600],
				},
				_active: {
					bg: colors.brand.platinum[700],
				},
			},
			default: {
				bg: colors.brand.platinum[500],
				color: 'black',
				_hover: {
					bg: colors.brand.platinum[600],
				},
				_active: {
					bg: colors.brand.platinum[700],
				},
			},
			advance: {
				bg: colors.brand.blueYale[500],
				color: 'white',
				_hover: {
					bg: colors.brand.blueYale[600],
				},
				_active: {
					bg: colors.brand.blueYale[700],
				},
			},
			confirm: {
				bg: colors.brand.greenPine[500],
				color: 'white',
				_hover: {
					bg: colors.brand.greenPine[600],
				},
				_active: {
					bg: colors.brand.greenPine[700],
				},
			},
			negative: {
				bg: colors.brand.brown[500],
				color: 'white',
				_hover: {
					bg: colors.brand.brown[600],
				},
				_active: {
					bg: colors.brand.brown[700],
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
