import { Box, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMissionTrackerById } from '../../utilities/mission-api'
import MissionTrackerForm from '../../components/Mission/MissionTrackerForm'
import ElementCard from '../../components/Miscellaneous/ElementCard'
import Pentagon from '../../components/Mission/Pentagon'
import Tasks from '../../components/Mission/Tasks'
import TaskTokens from '../../components/Mission/TaskTokens'
import { parseBoldText } from '../../utilities/miscellaneous'
import AdjacentMissions from '../../components/Mission/AdjacentMissions'
import CustomSpinner from '../../components/Miscellaneous/CustomSpinner'

function Mission() {
	const [mission, setMission] = useState(null)
	const [tracker, setTracker] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [adjacentMissions, setAdjacentMissions] = useState(null)
	const { missionTrackerId } = useParams()
	const [error, setError] = useState('')

	useEffect(() => {
		async function getTracker() {
			try {
				const res = await getMissionTrackerById(missionTrackerId)
				const { tracker, mission, adjacentMissions } = await res.json()
				if (tracker && mission && adjacentMissions) {
					setTracker(tracker)
					setMission(mission)
					setAdjacentMissions(adjacentMissions)
				} else {
					setError('Could not retrive mission')
				}
			} catch (error) {
				console.log(error)
			}
			setIsLoading(false)
		}
		getTracker()
	}, [missionTrackerId])

	function updateMissionTracker(updatedTracker) {
		setTracker(updatedTracker)
	}

	return (
		<>
			{!isLoading ? (
				<>
					<ElementCard>
						<Stack spacing={8}>
							<Stack>
								<HStack justify={'space-between'}>
									<Box alignSelf={'start'}>
										{console.log({ tracker })}
										<Pentagon number={mission.number} fivePlayerRule={mission.fivePlayerRule} />
									</Box>
									<VStack alignSelf={'start'}>
										<HStack>
											<Box alignSelf={'start'}>
												<Tasks tasks={mission.tasks} />
											</Box>
											<TaskTokens tokens={mission.taskTokens} />
										</HStack>
									</VStack>
								</HStack>
								<VStack>
									{mission.description && (
										<Text variant={'missionDesc'}>{parseBoldText(mission.description)}</Text>
									)}
								</VStack>
							</Stack>
							<MissionTrackerForm tracker={tracker} updateMissionTracker={updateMissionTracker} />

							{error && <Text color={'red.500'}>{error}</Text>}
						</Stack>
					</ElementCard>
					<ElementCard>
						{adjacentMissions && (
							<AdjacentMissions adjacentMissions={adjacentMissions} crewId={tracker.crew} />
						)}
					</ElementCard>
				</>
			) : (
				<CustomSpinner />
			)}
		</>
	)
}

export default Mission
