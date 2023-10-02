import { HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { formatDate } from '../../utilities/miscellaneous'

function CrewDates({ startDate, finishDate }) {
	return (
		<Stack flexDir={['row', 'column']} justify={['space-between', 'center']}>
			<HStack>
				<Text fontWeight={'bold'}>Start:</Text>
				<Text variant={'handWritten'}>{formatDate(startDate)}</Text>
			</HStack>
			<HStack>
				<Text fontWeight={'bold'}>Finish:</Text>
				<Text variant={'handWritten'}>{finishDate ? formatDate(finishDate) : '---------'}</Text>
			</HStack>
		</Stack>
	)
}

export default CrewDates
