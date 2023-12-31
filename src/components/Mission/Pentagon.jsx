import { Box, Center, Text, Stack, Popover, PopoverTrigger } from '@chakra-ui/react'
import React from 'react'
import CustomPopover from '../Miscellaneous/CustomPopover'

function Pentagon({ number, fivePlayerRule, showPopover = false }) {
	const content = (
		<Box position='relative' w='60px' h='60px'>
			{/* Simulates border */}
			{fivePlayerRule && (
				<Box
					position='absolute'
					top='0'
					left='0'
					w='60px'
					h='60px'
					bgColor='gold'
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
				<Center position='absolute' top='2' left='0' right='0' bottom='0'>
					<Text fontSize={'3xl'} fontWeight={'bold'} color={'white'}>
						{number}
					</Text>
				</Center>
			</Box>
		</Box>
	)
	return (
		<>
			{showPopover ? (
				<Stack cursor={'pointer'}>
					<Popover>
						<PopoverTrigger>{content}</PopoverTrigger>
						<CustomPopover
							body={
								'Mission number. The golden border serves as a reminder of the additional rule in the game when playing with five players, begining with mission 25.'
							}
						/>
					</Popover>
				</Stack>
			) : (
				<>{content}</>
			)}
		</>
	)
}

export default Pentagon
