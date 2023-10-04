import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { formatDate } from '../../utilities/miscellaneous'
import TextWrapper from './TextWrapper'

function CrewDates({ startDate, finishDate }) {
	return (
		<Stack>
			<Stack justify={'space-between'}>
				<Text>Start:</Text>
				<TextWrapper>
					<Text>{formatDate(startDate)}</Text>
				</TextWrapper>
			</Stack>
			<Stack justify={'space-between'} fontWeight={'bold'}>
				<Text>Finish:</Text>
				<TextWrapper>
					<Text>{finishDate ? formatDate(finishDate) : '---------'}</Text>
				</TextWrapper>
			</Stack>
		</Stack>
	)
}

export default CrewDates
