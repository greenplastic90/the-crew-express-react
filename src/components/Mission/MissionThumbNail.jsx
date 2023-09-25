import { VStack } from '@chakra-ui/react'
import React from 'react'
import Pentagon from './Pentagon'
import ElementCard from '../Miscellaneous/ElementCard'

function MissionThumbNail({ mission, tracker }) {
	const { number, fivePlayerRule, tasks, taskTokens, description } = mission
	const { attempts, distressSignalUsed, completed } = tracker
	return (
		<ElementCard>
			<VStack>
				<Pentagon number={number} fivePlayerRule={fivePlayerRule} />
			</VStack>
		</ElementCard>
	)
}

export default MissionThumbNail
