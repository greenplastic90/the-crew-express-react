import { VStack } from '@chakra-ui/react'
import React from 'react'
import Pentagon from './Pentagon'
import ElementCard from '../Miscellaneous/ElementCard'
import { useNavigation } from '../Context/NavigationContext'

function MissionThumbNail({ mission, tracker }) {
	const { number, fivePlayerRule } = mission

	const { handleNavigation } = useNavigation()

	function handleNavigateToMission() {
		handleNavigation(`/mission/${tracker._id}`, 'north-east')
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
