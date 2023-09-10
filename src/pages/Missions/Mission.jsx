import { Button, HStack, Heading, Spinner, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMissionTrackerById } from '../../utilities/mission-api'
import MissionTrackerForm from '../../components/Mission/MissionTrackerForm'

function Mission() {
	const [mission, setMission] = useState(null)
	const [tracker, setTracker] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [adjacentMissions, setAdjacentMissions] = useState(null)
	const { missionTrackerId } = useParams()
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
					setIsLoading(false)
				}
			} catch (error) {
				console.log(error)
			}
		}
		getTracker()
	}, [missionTrackerId])
	return !isLoading ? (
		<Stack>
			{mission && (
				<Heading as={'h1'} size={'4xl'}>
					Mission {mission.number}
				</Heading>
			)}
			{tracker && <MissionTrackerForm key={tracker._id} tracker={tracker} />}
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
		</Stack>
	) : (
		<Spinner />
	)
}

export default Mission
