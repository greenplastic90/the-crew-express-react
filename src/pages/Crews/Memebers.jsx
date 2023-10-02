import { Text, Grid, GridItem, HStack, Box } from '@chakra-ui/react'
import React from 'react'
import HelmetIcon from '../../components/Crew/HelmetIcon'

function Members({ members }) {
	return (
		<Grid templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)']} rowGap={2}>
			{members.map((member, i) => (
				<GridItem key={i}>
					<HStack justifyItems={'start'}>
						<HelmetIcon index={i} />
						<Box maxW={'25vw'} minW={'10vw'}>
							<Text
								fontSize={'xl'}
								whiteSpace='nowrap'
								overflow='hidden'
								textOverflow='ellipsis'
								fontWeight='bold'>
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
