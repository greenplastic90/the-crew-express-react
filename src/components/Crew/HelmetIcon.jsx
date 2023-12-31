import { Circle } from '@chakra-ui/react'
import { GiAstronautHelmet } from 'react-icons/gi'
import React from 'react'
import { astroColorPicker } from '../../utilities/miscellaneous'

function HelmetIcon({ index }) {
	return (
		<Circle
			size={9}
			bg={astroColorPicker(index)}
			color='brand.gray'
			border={'1px'}
			borderColor={'white'}
			display='flex'
			alignItems='center'
			justifyContent='center'>
			<GiAstronautHelmet size={22} color={'white'} />
		</Circle>
	)
}

export default HelmetIcon
