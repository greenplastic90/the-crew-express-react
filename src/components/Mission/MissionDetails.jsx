import { HStack, Heading, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Pentagon from './Pentagon'
import Tasks from './Tasks'
import TaskTokens from './TaskTokens'

function MissionDetails({ mission, tracker }) {
	const { number, fivePlayerRule, tasks, tiles, rules } = mission
	const { attempts, distressSignalUsed, completed } = tracker

	const navigate = useNavigate()
	return (
		<Stack
			onClick={() => navigate(`/mission/${tracker._id}`)}
			border={'1px'}
			divider={<StackDivider />}>
			<HStack justify={'space-between'}>
				<Pentagon number={number} fivePlayerRule={fivePlayerRule} />
				<VStack border={'1px solid red'}>
					<Tasks tasks={tasks} />
					<TaskTokens tokens={tiles} />
				</VStack>
			</HStack>
			<Stack>
				<HStack>
					<Text>Attempts: {attempts}</Text>
					<Text>Disstress Signal: {distressSignalUsed ? 'Active' : 'Off'}</Text>
					<Text>Status: {completed ? 'Completed' : attempts.length ? 'Active' : 'Standby'}</Text>
				</HStack>
			</Stack>
		</Stack>
	)
}

export default MissionDetails
