import React, { useRef } from 'react'
import { Spinner, VStack } from '@chakra-ui/react'
import { astroColorPicker, randomBetweenZeroAndThree } from '../../utilities/miscellaneous'

function CustomSpinner() {
	const colorRef = useRef(astroColorPicker(randomBetweenZeroAndThree()))

	return (
		<VStack h={'50vh'} justify={'center'}>
			<Spinner
				size={'xl'}
				thickness='4px'
				speed='1.5s'
				color={colorRef.current}
				emptyColor='brand.grayDark'
			/>
		</VStack>
	)
}

export default CustomSpinner
