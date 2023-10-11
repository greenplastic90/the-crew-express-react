import React from 'react'

import AdventuresDisplay from '../../components/Adventure/AdventuresDisplay'
import { Button, Stack } from '@chakra-ui/react'
import { useNavigation } from '../../components/Context/NavigationContext'
import ElementCard from '../../components/Miscellaneous/ElementCard'

function Adventures() {
	const { handleNavigation } = useNavigation()
	return (
		<Stack>
			<ElementCard>
				<Button variant={'advance'} onClick={() => handleNavigation('/adventures/new', 'north')}>
					Create Adventure
				</Button>
			</ElementCard>
			<AdventuresDisplay />
		</Stack>
	)
}

export default Adventures
