import { Stack } from '@chakra-ui/react'
import React from 'react'

function TextWrapper({ children }) {
	return (
		<Stack
			// fontSize={'10px'}
			// w={'90px'}
			h={'30px'}
			align={'center'}
			justify={'center'}
			px={2}
			bg={'whiteAlpha.900'}
			border={'2px solid'}
			borderColor={'brand.grayDark'}
			borderRadius={'md'}>
			{children}
		</Stack>
	)
}

export default TextWrapper
