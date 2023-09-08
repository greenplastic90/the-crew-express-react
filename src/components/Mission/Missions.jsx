import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import MissionDetails from './MissionDetails'

function Missions({ missions }) {
	return (
		<Stack>
			<Heading as={'h2'} size={'2xl'}>
				Missions
			</Heading>
			{missions.map(({ mission, tracker }) => (
				<MissionDetails key={tracker._id} mission={mission} tracker={tracker} />
			))}
		</Stack>
	)
}
export default Missions
