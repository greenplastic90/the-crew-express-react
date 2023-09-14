import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import MissionDetails from './MissionDetails'

function Missions({ missions, updateMissionTracker }) {
	return (
		<Stack>
			<Heading as={'h2'} size={'2xl'}>
				Missions
			</Heading>
			<Stack spacing={0}>
				{missions.map(({ mission, tracker }, i) => (
					<MissionDetails
						key={tracker._id}
						mission={mission}
						tracker={tracker}
						updateMissionTracker={updateMissionTracker}
						index={i}
					/>
				))}
			</Stack>
		</Stack>
	)
}
export default Missions
