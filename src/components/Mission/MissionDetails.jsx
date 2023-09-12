import { HStack, Stack, StackDivider, Text, VStack, Button } from '@chakra-ui/react'
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
		<Stack bg={'brand.beigeLight'} borderRadius={'md'} p={4} divider={<StackDivider />}>
			<HStack justify={'space-between'}>
				<Stack as='div' justifyContent='space-between'>
					{description && <Text>{parseBoldText(description)}</Text>}

					<Pentagon number={number} fivePlayerRule={fivePlayerRule} />
					{fivePlayerRule && (
						<Text variant={'outline'} fontWeight={'bold'} color='gold'>
							5 player rule
						</Text>
					)}
				</Stack>
				<VStack alignSelf={'start'}>
					<Tasks tasks={tasks} />
					<TaskTokens tokens={taskTokens} />
				</VStack>
			</HStack>

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
