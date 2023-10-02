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
		<Stack
			p={4}
			bgColor={'brand.greyBg'}
			border={'2px solid'}
			borderRadius={'md'}
			borderColor={'white'}
			flexGrow={1}
			justifyContent={'space-between'}>
			<Box w={['300px', '450px']}>
				<Heading
					color={'brand.redDark'}
					textTransform={'uppercase'}
					as={'h2'}
					size={'md'}
					whiteSpace='nowrap'
					overflow='hidden'
					textOverflow='ellipsis'>
					{name}
				</Heading>
			</Box>
			<Stack spacing={4} flexDir={['column', 'row']} justify={'space-between'}>
				<Memebers members={memberNames} />

				<CrewDates startDate={startDate} finishDate={finishDate} />
			</Stack>

			<Stack flexDir={['row']} justify={['space-between']} alignItems={'center'}>
				<Attempts attempts={totalAttempts} />
				<Button w={'full'} onClick={handleMissionNavigation}>
					Missions
				</Button>
				<CrewNavButtons crew={crew} setCrews={setCrews} />
			</Stack>
		</Stack>
	)
}

export default CrewDetails
