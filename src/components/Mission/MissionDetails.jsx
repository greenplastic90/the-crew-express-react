import { HStack, Stack, StackDivider, Text, VStack, Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Pentagon from './Pentagon'
import Tasks from './Tasks'
import TaskTokens from './TaskTokens'
import { parseBoldText } from '../../utilities/miscellaneous'

function MissionDetails({ mission, tracker }) {
	const { number, fivePlayerRule, tasks, taskTokens, description } = mission
	const { attempts, distressSignalUsed, completed } = tracker

	const navigate = useNavigate()
	return (
		<Stack bg={'brand.peach'} borderRadius={'md'} p={4} divider={<StackDivider />}>
			<HStack minH={40} h='40px' justify={'space-between'}>
				<Stack as='div' h='100%' justifyContent='space-between'>
					{description && <Text>{parseBoldText(description)}</Text>}

					<Pentagon number={number} fivePlayerRule={fivePlayerRule} />
				</Stack>
				<VStack alignSelf={'center'}>
					<Tasks tasks={tasks} />
					<TaskTokens tokens={taskTokens} />
				</VStack>
			</HStack>

			{/* //! Don't forget the Rules */}
			<Stack>
				<HStack>
					<Text>Attempts: {attempts}</Text>
					<Text>Disstress Signal: {distressSignalUsed ? 'Active' : 'Off'}</Text>
					<Text>Status: {completed ? 'Completed' : attempts ? 'Active' : 'Standby'}</Text>
				</HStack>
			</Stack>
			<Button onClick={() => navigate(`/mission/${tracker._id}`)}>Launch Mission</Button>
		</Stack>
	)
}

export default MissionDetails
