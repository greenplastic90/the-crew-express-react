import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useBackgroundScroll } from '../Context/BackgroundScrollContext'

function AdjacentMissions({ adjacentMissions, crewId }) {
	const navigate = useNavigate()
	const { handleBackgroundScroll } = useBackgroundScroll()

	function handleNextNavigation() {
		navigate(`/mission/${adjacentMissions.nextMissionTracker}`)
		handleBackgroundScroll('north-east', 500)
	}
	function handlePreviousNavigation() {
		navigate(`/mission/${adjacentMissions.prevMissionTracker}`)
		handleBackgroundScroll('south-west', 500)
	}
	function handleCrewNavigations() {
		navigate(`/crew/${crewId}`)
		handleBackgroundScroll('south', 200)
	}
	return (
		<HStack>
			<Button isDisabled={!adjacentMissions.prevMissionTracker} onClick={handlePreviousNavigation}>
				Previous
			</Button>
			<Button isDisabled={!adjacentMissions.nextMissionTracker} onClick={handleNextNavigation}>
				Next
			</Button>
			<Button onClick={handleCrewNavigations}>All Missions</Button>
		</HStack>
	)
}

export default AdjacentMissions
