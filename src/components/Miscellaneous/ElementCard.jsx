import { Stack } from '@chakra-ui/react'
import React from 'react'

function ElementCard({ children }) {
	return (
		<Stack p={4} bg={'brand.greyBg'} borderRadius={'sm'} border={'2px'} borderColor={'white'}>
			{children}
		</Stack>
	)
}

export default ElementCard
