import { Circle } from '@chakra-ui/react'
import { GiAstronautHelmet } from 'react-icons/gi'
import React from 'react'
import { astroColorPicker } from '../../utilities/miscellaneous'

function HelmetIcon({ index }) {
	return (
		<Circle
			size={10}
			bg={'black'}
			color='white'
			border={'1px'}
			borderColor={astroColorPicker(index)}
			display='flex'
			alignItems='center'
			justifyContent='center'>
			<GiAstronautHelmet size={24} color={astroColorPicker(index)} />
		</Circle>
	)
}

export default HelmetIcon
