import { Box, Center, Popover, PopoverTrigger, Text } from '@chakra-ui/react'
import React from 'react'
import CustomPopover from '../Miscellaneous/CustomPopover'

function TaskToken({ value }) {
	return (
		<Popover>
			<PopoverTrigger>
				<Box w='45px' h='45px' bgColor='black' m={1} borderRadius={'sm'}>
					<Center h='100%'>
						<Text variant='outline' fontSize={'lg'} fontWeight={'bold'} color='brand.purple'>
							{value}
						</Text>
					</Center>
				</Box>
			</PopoverTrigger>
			<CustomPopover body={'All task tokens nessary for the current mission are listed here.'} />
		</Popover>
	)
}

export default TaskToken
