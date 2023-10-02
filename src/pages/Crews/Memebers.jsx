import { Text, Grid, GridItem, HStack, Box } from '@chakra-ui/react'
import React from 'react'
import HelmetIcon from '../../components/Crew/HelmetIcon'
import TextWrapper from '../../components/Crew/TextWrapper'

function Members({ members }) {
	const isOdd = members.length % 2 !== 0

	return (
		<Grid templateColumns={['repeat(2, 1fr)']} gap={2}>
			{members.map((member, i) => (
				<GridItem key={i} colSpan={isOdd && i === 0 ? 2 : 1}>
					<HStack justifyItems={'start'} justifyContent={'start'}>
						<HelmetIcon index={i} />
						<TextWrapper>
							<Box w='100px' align={'center'}>
								<Text
									variant={'handWritten'}
									whiteSpace='nowrap'
									overflow='hidden'
									textOverflow='ellipsis'>
									{member}
								</Text>
							</Box>
						</TextWrapper>
					</HStack>
				</GridItem>
			))}
		</Grid>
	)
}

export default Members
