import { HStack, Stack, Text, VStack, Box } from '@chakra-ui/react'
import React from 'react'
import Pentagon from './Pentagon'
import Tasks from './Tasks'
import TaskTokens from './TaskTokens'
import { parseBoldText } from '../../utilities/miscellaneous'

function MissionDetails({ mission }) {
	const { number, fivePlayerRule, tasks, taskTokens, description } = mission

	return (
		<Stack>
			<HStack justify={'space-between'}>
				<Box alignSelf={'start'}>
					<Pentagon number={number} fivePlayerRule={fivePlayerRule} showPopover={true} />
				</Box>
				<VStack alignSelf={'start'}>
					<HStack>
						<Box alignSelf={'start'}>{tasks > 0 && <Tasks tasks={tasks} />}</Box>
						<TaskTokens tokens={taskTokens} />
					</HStack>
				</VStack>
			</HStack>
			<Stack>
				{description && <Text variant={'description'}>{parseBoldText(description)}</Text>}
			</Stack>
		</Stack>
	)
}

export default MissionDetails
