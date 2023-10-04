import { Grid } from '@chakra-ui/react'
import React from 'react'
import MissionThumbNail from './MissionThumbNail'

function Missions({ missions }) {
	return (
		<Grid templateColumns='repeat(auto-fill, minmax(100px, 1fr))' gap={6}>
			{missions.map(({ mission, tracker }) => (
				<MissionThumbNail key={tracker._id} mission={mission} tracker={tracker} />
			))}
		</Grid>
	)
}
export default Missions
