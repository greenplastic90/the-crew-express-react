import { Stack } from '@chakra-ui/react'
import React from 'react'

function ElementCard({ index = 2, children }) {
	return (
		<Stack p={4} bg={index % 2 === 0 ? 'brand.beigeLight' : 'brand.beige'}>
			{children}
		</Stack>
	)
}

export default ElementCard
