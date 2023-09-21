import { HStack, Stack, Text, VStack, Box } from '@chakra-ui/react'
import React from 'react'
import Pentagon from './Pentagon'
import Tasks from './Tasks'
import TaskTokens from './TaskTokens'
import { parseBoldText } from '../../utilities/miscellaneous'
import MissionTrackerForm from './MissionTrackerForm'
import DisstressSignal from './DisstressSignal'
import MissionDetailsWrapper from './MissionDetailsWrapper'
import ElementCard from '../Miscellaneous/ElementCard'

function MissionDetails({ mission, tracker, updateMissionTracker, index }) {
	const { number, fivePlayerRule, tasks, taskTokens, description } = mission
	const { attempts, distressSignalUsed, completed } = tracker

	return (
		<MissionDetailsWrapper>
			<ElementCard index={index}>
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
					<HStack fontFamily={'Roboto Slab'}>
						{attempts > 0 && (
							<>
								<Text fontSize={'md'}>Attempts:</Text>
								<Text fontSize={'xl'} fontWeight={'bold'}>
									{attempts}
								</Text>
							</>
						)}
						{completed && distressSignalUsed && (
							<DisstressSignal distressSignalUsed={distressSignalUsed} />
						)}
					</HStack>
				</Stack>
				<MissionTrackerForm tracker={tracker} updateMissionTracker={updateMissionTracker} />
			</ElementCard>
		</MissionDetailsWrapper>
	)
}

export default MissionDetails
