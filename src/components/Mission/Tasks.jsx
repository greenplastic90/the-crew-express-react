import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

function Tasks({ tasks }) {
	return (
		tasks && (
			<Box w='30px' h='50px' bg='brand.blueDark' border='2px solid white' borderRadius='md'>
				<Center h='100%'>
					<Text fontSize={'xl'} color={'white'}>
						{tasks}
					</Text>
				</Center>
			</Box>
		)
	)
}

export default Tasks
