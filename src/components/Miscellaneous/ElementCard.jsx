import { Stack } from '@chakra-ui/react'
import React from 'react'

function ElementCard({ children }) {
	return (
		<Stack bg={'brand.grayDark'} p={2} borderRadius={'md'}>
			<Stack h={'100%'} p={4} bg={'brand.gray'} borderRadius={'md'}>
				{children}
			</Stack>
		</Stack>
	)
}

export default ElementCard
