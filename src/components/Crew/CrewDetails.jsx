import { Box, HStack, Heading, Text } from '@chakra-ui/react'
import React from 'react'

import { formatDate } from '../../utilities/miscellaneous'
import CrewNavButtons from './CrewNavButtons'
import Memebers from '../../pages/Crews/Memebers'
import ElementCard from '../Miscellaneous/ElementCard'

function CrewDetails({ crew, setCrews }) {
	const { name, memberNames, startDate, finishDate, totalAttempts } = crew

	return (
		<ElementCard>
			<Box w={['300px', '370px', '600px', '800px']} border={'1px solid red'}>
				<Heading
					as={'h2'}
					size={'lg'}
					whiteSpace='nowrap'
					overflow='hidden'
					textOverflow='ellipsis'>
					{name}
				</Heading>
			</Box>

			<Memebers members={memberNames} />
			<HStack justify={'space-around'}>
				<Text>Start: {formatDate(startDate)}</Text>
				<Text>Finish: {finishDate ? formatDate(finishDate) : 'Not Completed'}</Text>
			</HStack>
			<Text>Attemps: {totalAttempts}</Text>
			<CrewNavButtons crew={crew} setCrews={setCrews} />
		</ElementCard>
	)
}

export default CrewDetails
