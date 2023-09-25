import { VStack } from '@chakra-ui/react'
import React from 'react'
import Pentagon from './Pentagon'
import ElementCard from '../Miscellaneous/ElementCard'
import { useNavigate } from 'react-router-dom'
import { useBackgroundScroll } from '../Context/BackgroundScrollContext'

function MissionThumbNail({ mission, tracker }) {
	const { number, fivePlayerRule, tasks, taskTokens, description } = mission
	const { _id, attempts, distressSignalUsed, completed } = tracker

	const navigate = useNavigate()
	const { handleBackgroundScroll } = useBackgroundScroll()

	function handleNavigateToMission() {
		navigate(`/mission/${_id}`)
		handleBackgroundScroll('north-east', 500)
	}
	return (
		<ElementCard>
			<VStack w={'100%'} h={'100%'} onClick={handleNavigateToMission} cursor={'pointer'}>
				<Pentagon number={number} fivePlayerRule={fivePlayerRule} />
			</VStack>
		</ElementCard>
	)
}

export default MissionThumbNail
