import { HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

import { formatDate } from '../../utilities/miscellaneous'
import CrewNavButtons from './CrewNavButtons'

function CrewDetails({ crew, setCrews }) {
	const { name, memberNames, startDate, finishDate, totalAttempts } = crew

	return (
		<Stack border={'1px'}>
			<Heading as={'h2'} size={'lg'}>
				{name}
			</Heading>
			<HStack>
				{memberNames.map((member, i) => (
					<Text key={i}>{member}</Text>
				))}
			</HStack>
			<HStack>
				<Text>Start: {formatDate(startDate)}</Text>
				<Text>Finish: {finishDate ? formatDate(finishDate) : 'Not Completed'}</Text>
			</HStack>
			<Text>Attemps: {totalAttempts}</Text>
			<CrewNavButtons crew={crew} setCrews={setCrews} />
		</Stack>
	)
}

export default CrewDetails
