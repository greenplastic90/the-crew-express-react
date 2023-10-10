import { Stack } from '@chakra-ui/react'
import React from 'react'
import CrewsDisplay from '../../components/Crew/CrewsDisplay'

function Crews() {
	return (
		<Stack>
			{/* <Button
				onClick={() => handleNavigation('/crew/new', 'south')}
				colorScheme='brand.antiFlashWhite'
				color={'black'}>
				+ New Crew
			</Button> */}
			<CrewsDisplay />
		</Stack>
	)
}

export default Crews
