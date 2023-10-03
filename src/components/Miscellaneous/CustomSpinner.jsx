import React, { useRef } from 'react'
import ElementCard from './ElementCard'
import { Spinner, VStack } from '@chakra-ui/react'
import { astroColorPicker, randomBetweenZeroAndFive } from '../../utilities/miscellaneous'

function CustomSpinner() {
	const colorRef = useRef(astroColorPicker(randomBetweenZeroAndFive()))

	return (
		<ElementCard>
			<VStack h={'50vh'} justify={'center'}>
				<Spinner
					size={'xl'}
					thickness='4px'
					speed='1.5s'
					color={colorRef.current}
					emptyColor='brand.greyDark'
				/>
			</VStack>
		</ElementCard>
	)
}

export default CustomSpinner
