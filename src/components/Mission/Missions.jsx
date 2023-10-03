import { Grid } from '@chakra-ui/react'
import React from 'react'
import MissionThumbNail from './MissionThumbNail'
import ElementCard from '../Miscellaneous/ElementCard'

function Missions({ missions }) {
	return (
		<ElementCard>
			<Grid templateColumns='repeat(auto-fill, minmax(100px, 1fr))' gap={6}>
				{missions.map(({ mission, tracker }) => (
					<MissionThumbNail key={tracker._id} mission={mission} tracker={tracker} />
				))}
			</Grid>
		</ElementCard>
	)
}
export default Missions
