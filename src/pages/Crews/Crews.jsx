import { Button, Stack } from '@chakra-ui/react'
import React from 'react'
import CrewsDisplay from '../../components/Crew/CrewsDisplay'
import { useNavigation } from '../../components/Context/NavigationContext'

function Crews() {
	const { handleNavigation } = useNavigation()

	return (
		<Stack>
			<Button
				onClick={() => handleNavigation('/crew/new', 'south')}
				colorScheme='brand.antiFlashWhite'
				color={'black'}>
				+ New Crew
			</Button>
			<CrewsDisplay />
		</Stack>
	)
}

export default Crews
