import { Box, Center, Popover, PopoverTrigger, Text } from '@chakra-ui/react'
import React from 'react'
import CustomPopover from '../Miscellaneous/CustomPopover'

function Tasks({ tasks }) {
	return (
		tasks && (
			<Popover>
				<PopoverTrigger>
					<Box
						_focus={{ outline: 'none' }}
						cursor={'pointer'}
						w='30px'
						h='50px'
						bg='brand.blueDark'
						border='2px solid white'
						borderRadius='md'>
						<Center h='100%'>
							<Text fontSize={'xl'} color={'white'}>
								{tasks}
							</Text>
						</Center>
					</Box>
				</PopoverTrigger>
				<CustomPopover
					body={'When a mission uses task cards, then the quantity is shown with this symbol.'}
				/>
			</Popover>
		)
	)
}

export default Tasks
