import { HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { formatDate } from '../../utilities/miscellaneous'
import TextWrapper from './TextWrapper'

function CrewDates({ startDate, finishDate }) {
	return (
		<Stack flexDir={['row', 'column']} justify={['space-between', 'center']}>
			<HStack justify={'space-between'}>
				<Text fontWeight={'bold'}>Start:</Text>
				<TextWrapper>
					<Text variant={'handWritten'} fontSize={'sm'}>
						{formatDate(startDate)}
					</Text>
				</TextWrapper>
			</HStack>
			<HStack justify={'space-between'}>
				<Text fontWeight={'bold'}>Finish:</Text>
				<TextWrapper>
					<Text variant={'handWritten'} fontSize={'sm'}>
						{finishDate ? formatDate(finishDate) : '---------'}
					</Text>
				</TextWrapper>
			</HStack>
		</Stack>
	)
}

export default CrewDates
