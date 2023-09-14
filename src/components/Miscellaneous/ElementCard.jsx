import { Stack } from '@chakra-ui/react'
import React from 'react'

function ElementCard({ bgColor = 'brand.beigeLight', children }) {
	return (
		<Stack bg={bgColor} p={4}>
			{children}
		</Stack>
	)
}

export default ElementCard
