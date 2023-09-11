import { Circle, Text, Grid, GridItem, HStack } from '@chakra-ui/react'
import React from 'react'
import { astroColorPicker } from '../../utilities/miscellaneous'
import { GiAstronautHelmet } from 'react-icons/gi'

function Members({ members }) {
	return (
		<Grid templateColumns='repeat(3, 1fr)' rowGap={2}>
			{members.map((member, i) => (
				<GridItem key={i}>
					<HStack justifyItems={'start'}>
						<Circle
							size={10}
							bg={astroColorPicker(i)}
							color='white'
							border={'1px'}
							borderColor={'white'}
							display='flex'
							alignItems='center'
							justifyContent='center'>
							<GiAstronautHelmet size={24} />
						</Circle>
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
