import { Stack } from '@chakra-ui/react'
import React from 'react'

function PageWrapper({ children }) {
	return (
		<Stack h={'100%'} pt={16} pb={8} px={[4, 8, 16, 32, 64, 256]}>
			{children}
		</Stack>
	)
}

export default PageWrapper
