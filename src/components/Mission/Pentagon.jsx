import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

function Pentagon({ number, fivePlayerRule }) {
	return (
		<Box position='relative' w='60px' h='60px'>
			{/* Simulates border */}
			{fivePlayerRule && (
				<Box
					position='absolute'
					top='0'
					left='0'
					w='60px'
					h='60px'
					bgColor={'gold'}
					clipPath='polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'></Box>
			)}
			<Box
				position='absolute'
				top='0'
				left='0'
				w='60px'
				h='60px'
				transform='scale(0.9)' // scale the inner pentagon
				bgColor='black'
				clipPath='polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'>
				<Center position='absolute' top='0' left='0' right='0' bottom='0'>
					<Text fontSize={25} fontWeight={'bold'} color={'white'}>
						{number}
					</Text>
				</Center>
			</Box>
		</Box>
	)
}

export default Pentagon
