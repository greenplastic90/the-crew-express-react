import { HStack, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Pentagon from './Pentagon'

function MissionDetails({ mission, tracker }) {
	const { number, fivePlayerRule, tasks, tiles, rules } = mission
	const { attempts, distressSignalUsed, completed } = tracker

	const navigate = useNavigate()
	return (
		<Stack
			onClick={() => navigate(`/mission/${tracker._id}`)}
			border={'1px'}
			divider={<StackDivider />}>
			<Stack>
				<Pentagon number={number} fivePlayerRule={fivePlayerRule} />

				{tasks && <Text color={'blue.500'}>Tasks: {tasks}</Text>}
				{tiles.length && (
					<HStack>
						<Text>Tiles</Text>
						<HStack>
							{tiles.map((t) => (
								<Text key={t._id} color={'purple.500'}>
									{t.value}
								</Text>
							))}
						</HStack>
					</HStack>
				)}
				{rules.length && (
					<Stack>
						<Text>Rules</Text>
						{rules.map((r) => (
							<HStack key={r._id}>
								<Text>
									{r.type}: {r.description}
								</Text>
							</HStack>
						))}
					</Stack>
				)}
			</Stack>
			<Stack>
				<Heading as={'h4'} size={'md'}>
					Tracking:
				</Heading>
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
