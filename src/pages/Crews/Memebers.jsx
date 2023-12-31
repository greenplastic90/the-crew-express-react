import { Text, HStack, Box, Stack } from '@chakra-ui/react'
import React from 'react'
import TextWrapper from '../../components/Crew/TextWrapper'

function Members({ members }) {
	// const isOdd = members.length % 2 !== 0

	return (
		// <Grid templateColumns={['repeat(2, 1fr)']} gap={2}>
		<Stack flexDir={'row'} wrap={'wrap'}>
			{members.map((member, i) => (
				// <GridItem key={i} colSpan={isOdd && i === 0 ? 2 : 1}>
				<HStack key={i} justifyItems={'start'} justifyContent={'start'}>
					{/* <HelmetIcon index={i} /> */}
					<TextWrapper>
						<Box
							// w='80px'
							align={'center'}>
							<Text whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>
								{member}
							</Text>
						</Box>
					</TextWrapper>
				</HStack>
				// </GridItem>
			))}
		</Stack>
		// </Grid>
	)
}

export default Members
