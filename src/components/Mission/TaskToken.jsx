import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

function TaskToken({ value }) {
	return (
		<Box w='45px' h='45px' bgColor='black' m={1} borderRadius={'sm'}>
			<Center h='100%'>
				<Text variant='outline' fontSize={'lg'} fontWeight={'bold'} color='brand.purple'>
					{value}
				</Text>
			</Center>
		</Box>
	)
}

export default TaskToken
