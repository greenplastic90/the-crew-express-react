import { Text, Grid, GridItem, HStack } from '@chakra-ui/react'
import React from 'react'
import { astroColorPicker } from '../../utilities/miscellaneous'
import HelmetIcon from '../../components/Crew/HelmetIcon'

function Members({ members }) {
	return (
		<Grid templateColumns='repeat(3, 1fr)' rowGap={2}>
			{members.map((member, i) => (
				<GridItem key={i}>
					<HStack justifyItems={'start'}>
						<HelmetIcon index={i} />
						<Text variant={'outline'} color={astroColorPicker(i)} fontWeight='bold'>
							{member}
						</Text>
					</HStack>
				</GridItem>
			))}
		</Grid>
	)
}

export default Members
