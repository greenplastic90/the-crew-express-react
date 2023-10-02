import { Text, Grid, GridItem, HStack, Box } from '@chakra-ui/react'
import React from 'react'
import HelmetIcon from '../../components/Crew/HelmetIcon'

function Members({ members }) {
	return (
		<Grid templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)']} rowGap={2}>
			{members.map((member, i) => (
				<GridItem key={i}>
					<HStack justifyItems={'start'}>
						<HelmetIcon index={i} />
						<Box w={['25vw', '20vw']}>
							<Text whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis' fontWeight='bold'>
								{member}
							</Text>
						</Box>
					</HStack>
				</GridItem>
			))}
		</Grid>
	)
}

export default Members
