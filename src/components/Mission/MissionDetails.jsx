import { HStack, Stack, Text, VStack, Box } from '@chakra-ui/react'
import React from 'react'
import Pentagon from './Pentagon'
import Tasks from './Tasks'
import TaskTokens from './TaskTokens'
import { parseBoldText } from '../../utilities/miscellaneous'
import MissionTrackerForm from './MissionTrackerForm'
import DisstressSignal from './DisstressSignal'

function MissionDetails({ mission, tracker, updateMissionTracker }) {
	const { number, fivePlayerRule, tasks, taskTokens, description } = mission
	const { attempts, distressSignalUsed, completed } = tracker

	return (
		<Stack bg={'brand.beigeLight'} borderRadius={'md'} p={4} border={'2px'} borderColor={'white'}>
			<HStack justify={'space-between'}>
				<Box alignSelf={'start'}>
					<Pentagon number={number} fivePlayerRule={fivePlayerRule} />
				</Box>

				<VStack alignSelf={'start'}>
					<HStack>
						<Box alignSelf={'start'}>
							<Tasks tasks={tasks} />
						</Box>
						<TaskTokens tokens={taskTokens} />
					</HStack>
				</VStack>
			</HStack>

			<VStack>
				{description && <Text variant={'missionDesc'}>{parseBoldText(description)}</Text>}
			</VStack>

			<Stack>
				<HStack>
					<Text>Attempts: {attempts}</Text>
					{completed && distressSignalUsed && (
						<DisstressSignal distressSignalUsed={distressSignalUsed} />
					)}
				</HStack>
			</Stack>
			<MissionTrackerForm tracker={tracker} updateMissionTracker={updateMissionTracker} />
		</Stack>
	)
}

export default MissionDetails
