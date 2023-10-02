import { Box, Button, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../../utilities/miscellaneous'
import CrewNavButtons from './CrewNavButtons'
import Memebers from '../../pages/Crews/Memebers'
import ElementCard from '../Miscellaneous/ElementCard'
import Attempts from '../Mission/Attempts'
import CrewDates from './CrewDates'
import { useBackgroundScroll } from '../Context/BackgroundScrollContext'

function CrewDetails({ crew, setCrews }) {
	const { name, memberNames, startDate, finishDate, totalAttempts } = crew
	const navigate = useNavigate()
	const { handleBackgroundScroll } = useBackgroundScroll()
	function handleMissionNavigation() {
		navigate(`/crew/${crew._id}`)
		handleBackgroundScroll('east')
	}
	return (
		<ElementCard>
			<Stack spacing={4}>
				<Box w={['75vw', null, null, '60vw']}>
					<Heading
						textTransform={'uppercase'}
						as={'h2'}
						size={'xl'}
						whiteSpace='nowrap'
						overflow='hidden'
						textOverflow='ellipsis'>
						{name}
					</Heading>
				</Box>
				<Stack spacing={4} flexDir={['column', 'row']} justify={'space-between'}>
					<Memebers members={memberNames} />
					<Stack spacing={4} justify={['space-between']} flexDir={['column']}>
						<CrewDates startDate={startDate} finishDate={finishDate} />
					</Stack>
				</Stack>
				<Stack flexDir={['row']} justify={['space-between']} alignItems={'center'}>
					<Attempts attempts={totalAttempts} />
					<Button w={'full'} onClick={handleMissionNavigation}>
						Missions
					</Button>
					<CrewNavButtons crew={crew} setCrews={setCrews} />
				</Stack>
			</Stack>
		</ElementCard>
	)
}

export default CrewDetails
