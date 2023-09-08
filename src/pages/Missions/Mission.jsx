import { Button, HStack, Heading, Link, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMissionTrackerById } from '../../utilities/mission-api'
import MissionTrackerForm from '../../components/Mission/MissionTrackerForm'

function Mission() {
	const [mission, setMission] = useState(null)
	const [tracker, setTracker] = useState(null)
	const [adjacentMissions, setAdjacentMissions] = useState(null)
	const { missionTrackerId } = useParams()
	const naviage = useNavigate()

	useEffect(() => {
		async function getTracker() {
			const res = await getMissionTrackerById(missionTrackerId)
			const { tracker, mission, adjacentMissions } = await res.json()
			if (tracker) setTracker(tracker)
			if (mission) setMission(mission)
			if (adjacentMissions) setAdjacentMissions(adjacentMissions)
		}
		getTracker()
	}, [missionTrackerId])
	return (
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
						onClick={() => naviage(`/mission/${adjacentMissions.prevMissionTracker}`)}>
						Previous
					</Button>
					<Button
						isDisabled={!adjacentMissions.nextMissionTracker}
						onClick={() => naviage(`/mission/${adjacentMissions.nextMissionTracker}`)}>
						Next
					</Button>
				</HStack>
			)}
		</Stack>
	)
}

export default Mission
