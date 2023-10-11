import React from 'react'

import AdventuresDisplay from '../../components/Adventure/AdventuresDisplay'
import { Button, Stack } from '@chakra-ui/react'
import { useNavigation } from '../../components/Context/NavigationContext'

function Adventures() {
	const { handleNavigation } = useNavigation()
	return (
		<Stack>
			<Button onClick={() => handleNavigation('/adventures/new', 'north')}>Create Adventure</Button>
			<AdventuresDisplay />
		</Stack>
	)
}

export default Adventures
