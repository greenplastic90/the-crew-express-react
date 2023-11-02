import { Box, Center, Popover, PopoverTrigger, Text } from '@chakra-ui/react'
import React from 'react'
import CustomPopover from '../Miscellaneous/CustomPopover'

const tokenDescriptions = {
	1: 'The task must be fulfilled [b]first[/b].',
	2: 'The task must be fulfilled [b]second[/b].',
	3: 'The task must be fulfilled [b]third[/b].',
	4: 'The task must be fulfilled [b]fourth[/b].',
	5: 'The task must be fulfilled [b]fifth[/b].',
	Ω: 'The task must be fulfilled [b]last[/b].',
	'>': 'The task must be fulfilled anytime [b]before[/b] >>.',
	'>>': 'The task must be fulfilled anytime [b]after[/b] >.',
	'>>>': 'The task must be fulfilled anytime [b]after[/b] >>.',
	'>>>>': 'The task must be fulfilled anytime [b]after[/b] >>>.',
}

function TaskToken({ value }) {
	const description = tokenDescriptions[value] || 'Description not available'

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
			<CustomPopover body={description} />
		</Popover>
	)
}

export default TaskToken
