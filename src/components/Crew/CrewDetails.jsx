import { Center, Circle, HStack, Heading, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { GiAstronautHelmet } from 'react-icons/gi'

import { astroColorPicker, formatDate } from '../../utilities/miscellaneous'
import CrewNavButtons from './CrewNavButtons'
import Memebers from '../../pages/Crews/Memebers'

function CrewDetails({ crew, setCrews }) {
	const { name, memberNames, startDate, finishDate, totalAttempts } = crew

	return (
		<Stack>
			<Heading as={'h2'} size={'lg'}>
				{name}
			</Heading>

			<Memebers members={memberNames} />
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
