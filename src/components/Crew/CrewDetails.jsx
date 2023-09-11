import { HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

import { formatDate } from '../../utilities/miscellaneous'
import CrewNavButtons from './CrewNavButtons'
import Memebers from '../../pages/Crews/Memebers'

function CrewDetails({ crew, setCrews }) {
	const { name, memberNames, startDate, finishDate, totalAttempts } = crew

	return (
		<Stack bg={'brand.beigeLight'} p={2} border={'2px'} borderColor={'white'} borderRadius={10}>
			<Heading as={'h2'} size={'lg'}>
				{name}
			</Heading>

			<Memebers members={memberNames} />
			<HStack justify={'space-around'}>
				<Text>Start: {formatDate(startDate)}</Text>
				<Text>Finish: {finishDate ? formatDate(finishDate) : 'Not Completed'}</Text>
			</HStack>
			<Text>Attemps: {totalAttempts}</Text>
			<CrewNavButtons crew={crew} setCrews={setCrews} />
		</Stack>
	)
}

export default CrewDetails
