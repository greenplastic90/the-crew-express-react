import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import Mission from './Mission'

function Missions({ missions }) {
	//! Sort- by ALL, Not Completed, Active?,
	return (
		<Stack>
			<Heading as={'h2'} size={'2xl'}>
				Missions
			</Heading>
			{missions.map(({ mission, tracker }) => (
				<Mission key={tracker._id} mission={mission} tracker={tracker} />
			))}
		</Stack>
	)
}
export default Missions
