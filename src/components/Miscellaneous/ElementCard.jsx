import { Stack } from '@chakra-ui/react'
import React from 'react'

function ElementCard({ children }) {
	return (
		<Stack
			p={4}
			bg={'brand.beige'}
			borderRadius={'sm'}
			border={'0.5em solid'}
			borderColor={'brand.beigeLight'}>
			{children}
		</Stack>
	)
}

export default ElementCard
