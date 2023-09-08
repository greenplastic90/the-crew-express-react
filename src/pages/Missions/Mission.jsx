import { Heading, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMissionTrackerById } from '../../utilities/mission-api'
import MissionTrackerForm from '../../components/Mission/MissionTrackerForm'

function Mission() {
	const [mission, setMission] = useState(null)
	const [tracker, setTracker] = useState(null)
	const { missionTrackerId } = useParams()

	useEffect(() => {
		async function getTracker() {
			const res = await getMissionTrackerById(missionTrackerId)
			const { tracker, mission } = await res.json()
			if (tracker) setTracker(tracker)
			if (mission) setMission(mission)
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
			{tracker && <MissionTrackerForm tracker={tracker} />}
			{/* //! Navigate mission buttons */}
		</Stack>
	)
}

export default Mission
