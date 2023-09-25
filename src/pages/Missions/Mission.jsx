import { Box, Button, HStack, Spinner, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMissionTrackerById } from '../../utilities/mission-api'
import MissionTrackerForm from '../../components/Mission/MissionTrackerForm'
import PageWrapper from '../../components/Miscellaneous/PageWrapper'
import ElementCard from '../../components/Miscellaneous/ElementCard'
import Pentagon from '../../components/Mission/Pentagon'
import Tasks from '../../components/Mission/Tasks'
import TaskTokens from '../../components/Mission/TaskTokens'
import { parseBoldText } from '../../utilities/miscellaneous'
import DisstressSignal from '../../components/Mission/DisstressSignal'

function Mission() {
	const [mission, setMission] = useState(null)
	const [tracker, setTracker] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [adjacentMissions, setAdjacentMissions] = useState(null)
	const { missionTrackerId } = useParams()
	const [error, setError] = useState('')
	const navigate = useNavigate()

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

	return !isLoading ? (
		<PageWrapper title={`Mission ${mission && mission.number}`}>
			<ElementCard>
				<HStack justify={'space-between'}>
					<Box alignSelf={'start'}>
						<Pentagon number={mission.number} fivePlayerRule={tracker.fivePlayerRule} />
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
				<Stack>
					<HStack fontFamily={'Roboto Slab'}>
						{tracker.attempts > 0 && (
							<>
								<Text fontSize={'md'}>Attempts:</Text>
								<Text fontSize={'xl'} fontWeight={'bold'}>
									{tracker.attempts}
								</Text>
							</>
						)}
						{tracker.completed && tracker.distressSignalUsed && (
							<DisstressSignal distressSignalUsed={tracker.distressSignalUsed} />
						)}
					</HStack>
				</Stack>
				<MissionTrackerForm tracker={tracker} updateMissionTracker={updateMissionTracker} />
				{adjacentMissions && (
					<HStack>
						<Button
							isDisabled={!adjacentMissions.prevMissionTracker}
							onClick={() => navigate(`/mission/${adjacentMissions.prevMissionTracker}`)}>
							Previous
						</Button>
						<Button
							isDisabled={!adjacentMissions.nextMissionTracker}
							onClick={() => navigate(`/mission/${adjacentMissions.nextMissionTracker}`)}>
							Next
						</Button>
						<Button onClick={() => navigate(`/crew/${tracker.crew}`)}>All Missions</Button>
					</HStack>
				)}
				{error && <Text color={'red.500'}>{error}</Text>}
			</ElementCard>
		</PageWrapper>
	) : (
		<Spinner />
	)
}

export default Mission
