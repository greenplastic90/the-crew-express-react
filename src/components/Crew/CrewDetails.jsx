import { Box, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

import { formatDate } from '../../utilities/miscellaneous'
import CrewNavButtons from './CrewNavButtons'
import Memebers from '../../pages/Crews/Memebers'
import ElementCard from '../Miscellaneous/ElementCard'

function CrewDetails({ crew, setCrews }) {
	const { name, memberNames, startDate, finishDate, totalAttempts } = crew

	return (
		<ElementCard>
			<Box w={['75vw', null, null, '60vw']}>
				<Heading
					as={'h2'}
					size={'lg'}
					whiteSpace='nowrap'
					overflow='hidden'
					textOverflow='ellipsis'>
					{name}
				</Heading>
			</Box>
			<Stack direction={['row', 'column']}>
				<Memebers members={memberNames} />
				{/* <HStack justify={'space-around'}>
					<Text>Start: {formatDate(startDate)}</Text>
					<Text>Finish: {finishDate ? formatDate(finishDate) : 'Not Completed'}</Text>
				</HStack>
				<Text>Attemps: {totalAttempts}</Text> */}
			</Stack>
			<CrewNavButtons crew={crew} setCrews={setCrews} />
		</ElementCard>
	)
}

export default CrewDetails
