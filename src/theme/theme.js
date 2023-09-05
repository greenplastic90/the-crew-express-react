// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react'

const colors = {
	brand: {
		fade: '#868686',
		primary: '#9E28B5',
		secondary: '#ffffff',
		accent: '#FFA400',
		blue: '#00C1DE',
		green: '#CDDE00',
		red: '#E50695',
		light_gray: '#EFEEE6',
		dark_gray: '#868686',
		cancel: '#F04352',
		border: '#EFEEE6',
		shadow: '#00000029',
		terms: '#424242',
		dotted: '#E4E4E4',
	},
}

const theme = extendTheme({
	colors,
})

export default theme
