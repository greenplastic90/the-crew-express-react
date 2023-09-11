import { Button, HStack, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMissionTrackerById } from '../../utilities/mission-api'
import MissionTrackerForm from '../../components/Mission/MissionTrackerForm'
import PageWrapper from '../../components/PageWrapper/PageWrapper'

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
	return !isLoading ? (
		<PageWrapper title={`Mission ${mission && mission.number}`}>
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
			{error && <Text color={'red.500'}>{error}</Text>}
		</PageWrapper>
	) : (
		<Spinner />
	)
}

export default Mission
