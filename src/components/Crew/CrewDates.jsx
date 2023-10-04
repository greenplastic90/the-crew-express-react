import { HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { formatDate } from '../../utilities/miscellaneous'
import TextWrapper from './TextWrapper'

function CrewDates({ startDate, finishDate }) {
	return (
		<Stack flexDir={['row', null, 'column']} justify={['start', null, 'end']}>
			<HStack justify={'space-between'}>
				<Text fontSize={'10px'} fontWeight={'bold'}>
					Start:
				</Text>
				<TextWrapper>
					<Text variant={'handWritten'}>{formatDate(startDate)}</Text>
				</TextWrapper>
			</HStack>
			<HStack justify={'space-between'} fontWeight={'bold'}>
				<Text fontSize={'10px'}>Finish:</Text>
				<TextWrapper>
					<Text variant={'handWritten'}>{finishDate ? formatDate(finishDate) : '--------'}</Text>
				</TextWrapper>
			</HStack>
		</Stack>
	)
}

export default CrewDates
