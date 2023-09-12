import { HStack, Box, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'
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
			bg={'brand.peach'}
			borderRadius={'md'}
			divider={<StackDivider />}>
			<HStack minH={40} justify={'space-between'}>
				<Box alignSelf={'end'} border={'1px solid red'}>
					<Pentagon number={number} fivePlayerRule={fivePlayerRule} />
				</Box>
				<VStack alignSelf={'start'} border={'1px solid red'}>
					<Tasks tasks={tasks} />
					<TaskTokens tokens={tiles} />
				</VStack>
			</HStack>
			{/* //! Don't forget the Rules */}
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
