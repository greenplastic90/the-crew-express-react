import { Stack } from '@chakra-ui/react'
import React from 'react'

function ElementCard({ index = 2, children }) {
	return (
		<Stack
			p={4}
			bg={'brand.beige'}
			borderRadius={'sm'}
			border={'1em solid'}
			borderColor={'brand.beigeLight'}>
			{children}
		</Stack>
	)
}

export default ElementCard
