import { Button, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import CrewUpdateDeleteButtons from './CrewUpdateDeleteButtons'
import Memebers from '../../pages/Crews/Memebers'
import ElementCard from '../Miscellaneous/ElementCard'
import Attempts from '../Mission/Attempts'
import CrewDates from './CrewDates'
import { useNavigation } from '../Context/NavigationContext'

function CrewDetails({ crew, setCrews }) {
	const { name, memberNames, startDate, finishDate, totalAttempts, adventure } = crew
	const { handleNavigation } = useNavigation()
	function handleMissionNavigation() {
		handleNavigation(`/crews/${crew._id}`, 'east')
	}
	return (
		<ElementCard>
			<Stack spacing={8} flexGrow={1} justifyContent={'space-between'}>
				<Stack>
					<Heading variant='crew'>{name}</Heading>
					<Heading variant={'adventure'} fontSize={'lg'}>
						{adventure.name}
					</Heading>
				</Stack>

				<Stack spacing={8}>
					<Memebers members={memberNames} />

					<CrewDates startDate={startDate} finishDate={finishDate} />
				</Stack>

				<Stack flexDir={['row']} justify={['space-between']} alignItems={'center'}>
					<Attempts attempts={totalAttempts} />
					<Button colorScheme={'brand.blueYale'} w={'full'} onClick={handleMissionNavigation}>
						Deploy
					</Button>
					<CrewUpdateDeleteButtons crew={crew} setCrews={setCrews} />
				</Stack>
			</Stack>
		</ElementCard>
	)
}

export default CrewDetails
