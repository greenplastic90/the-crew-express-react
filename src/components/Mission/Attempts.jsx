import { Circle, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Attempts({ attempts }) {
	return (
		<Circle size={12} border={'2px'} borderColor={'white'} bgColor={'rgba(255, 255, 255, 0.50)'}>
			<VStack
				w={'80%'}
				h={'80%'}
				justify={'center'}
				border={'2px'}
				borderColor={'white'}
				borderRadius={'md'}
				bgColor={'rgba(0, 0, 255, 0.20)'}>
				<Text>{attempts}</Text>
			</VStack>
		</Circle>
	)
}

export default Attempts
