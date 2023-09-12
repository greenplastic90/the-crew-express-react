import { HStack, Stack, StackDivider, Text, VStack, Button, Box } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Pentagon from './Pentagon'
import Tasks from './Tasks'
import TaskTokens from './TaskTokens'
import { parseBoldText } from '../../utilities/miscellaneous'
import { MdOutlineSatelliteAlt } from 'react-icons/md'

function MissionDetails({ mission, tracker }) {
	const { number, fivePlayerRule, tasks, taskTokens, description } = mission
	const { attempts, distressSignalUsed, completed } = tracker

	const navigate = useNavigate()
	return (
		<Stack bg={'brand.beigeLight'} borderRadius={'md'} p={4}>
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

			<VStack>{description && <Text>{parseBoldText(description)}</Text>}</VStack>

			{/* //! Don't forget the Rules */}
			<Stack>
				<HStack>
					<Text>Attempts: {attempts}</Text>
					<MdOutlineSatelliteAlt />
					<Text>Disstress Signal: {distressSignalUsed ? 'Active' : 'Off'}</Text>
					<Text>Status: {completed ? 'Completed' : attempts ? 'Active' : 'Standby'}</Text>
				</HStack>
			</Stack>
			<Button onClick={() => navigate(`/mission/${tracker._id}`)}>Launch Mission</Button>
		</Stack>
	)
}

export default MissionDetails
