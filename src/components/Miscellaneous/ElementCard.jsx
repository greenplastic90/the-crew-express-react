import { Stack } from '@chakra-ui/react'
import React from 'react'

function ElementCard({ children }) {
	return (
		<Stack bg={'brand.beigeLight'} borderRadius={'md'} p={4} border={'2px'} borderColor={'white'}>
			{children}
		</Stack>
	)
}

export default ElementCard
