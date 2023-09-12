import { Box, Center, HStack, Text } from '@chakra-ui/react'
import React from 'react'

function TaskTokens({ tokens }) {
	return (
		tokens.length !== 0 && (
			<HStack>
				{tokens.map((t) => (
					<Box key={t._id} w='40px' h='40px' bgColor='black'>
						<Center h='100%'>
							<Text variant='outline' fontSize={'xl'} fontWeight={'bold'} color='brand.purple'>
								{t.value}
							</Text>
						</Center>
					</Box>
				))}
			</HStack>
		)
	)
}

export default TaskTokens
