import { Button, Stack } from '@chakra-ui/react'
import React from 'react'
import CrewsDisplay from '../../components/Crew/CrewsDisplay'
import { useNavigation } from '../../components/Context/NavigationContext'
import ElementCard from '../../components/Miscellaneous/ElementCard'

function Crews() {
	const { handleNavigation } = useNavigation()
	return (
		<Stack>
			<ElementCard>
				<Button onClick={() => handleNavigation('/adventures', 'south')} variant={'advance'}>
					Browse Adventures
				</Button>
			</ElementCard>
			<CrewsDisplay />
		</Stack>
	)
}

export default Crews
