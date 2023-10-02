import { Text, Grid, GridItem, HStack, Box } from '@chakra-ui/react'
import React from 'react'
import HelmetIcon from '../../components/Crew/HelmetIcon'

function Members({ members }) {
	const isOdd = members.length % 2 !== 0

	return (
		<Grid templateColumns={['repeat(2, 1fr)']} rowGap={2}>
			{members.map((member, i) => (
				<GridItem key={i} colSpan={isOdd && i === 0 ? 2 : 1}>
					<HStack justifyItems={'start'} justifyContent={isOdd && i === 0 ? 'center' : 'start'}>
						<HelmetIcon index={i} />
						<Box w='100px'>
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
