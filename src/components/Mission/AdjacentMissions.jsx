import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigation } from '../Context/NavigationContext'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

function AdjacentMissions({ adjacentMissions, crewId }) {
	const { handleNavigation } = useNavigation()

	function handleNextNavigation() {
		handleNavigation(`/mission/${adjacentMissions.nextMissionTracker}`, 'north-east')
	}
	function handlePreviousNavigation() {
		handleNavigation(`/mission/${adjacentMissions.prevMissionTracker}`, 'south-west')
	}
	function handleCrewNavigations() {
		handleNavigation(`/crew/${crewId}`, 'south')
	}
	return (
		<HStack justify={'space-between'}>
			<HStack>
				<Button
					colorScheme='brand.platinum'
					color={'black'}
					isDisabled={!adjacentMissions.prevMissionTracker}
					onClick={handlePreviousNavigation}>
					<MdArrowBack size={25} />
				</Button>
				<Button
					colorScheme='brand.platinum'
					color={'black'}
					isDisabled={!adjacentMissions.nextMissionTracker}
					onClick={handleNextNavigation}>
					<MdArrowForward size={25} />
				</Button>
			</HStack>
			<Button colorScheme='brand.platinum' color={'black'} onClick={handleCrewNavigations}>
				Missions
			</Button>
		</HStack>
	)
}

export default AdjacentMissions
