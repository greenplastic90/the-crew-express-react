import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function AdjacentMissions({ adjacentMissions, crewId }) {
	const navigate = useNavigate()
	return (
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
			<Button onClick={() => navigate(`/crew/${crewId}`)}>All Missions</Button>
		</HStack>
	)
}

export default AdjacentMissions
