import { Button, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import UpdateDeleteButtons from '../Miscellaneous/UpdateDeleteButtons'
import Memebers from '../../pages/Crews/Memebers'
import ElementCard from '../Miscellaneous/ElementCard'
import Attempts from '../Mission/Attempts'
import CrewDates from './CrewDates'
import { useNavigation } from '../Context/NavigationContext'
import { deleteCrewById } from '../../utilities/crew-api'

function CrewDetails({ crew, setCrews }) {
	const { _id, name, memberNames, startDate, finishDate, totalAttempts, adventure } = crew
	const { handleNavigation } = useNavigation()
	function handleMissionNavigation() {
		handleNavigation(`/crews/${crew._id}`, 'east')
	}
	async function deleteCrew() {
		try {
			const res = await deleteCrewById(_id)
			const { message } = await res.json()

			if (message) {
				setCrews((crews) => {
					return crews.filter((c) => c._id !== _id)
				})
			}
		} catch (error) {
			console.log(error)
		}
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
					<Button variant={'advance'} w={'full'} onClick={handleMissionNavigation}>
						Deploy
					</Button>
					<UpdateDeleteButtons
						name={crew.name}
						updateFormPath={`/crews/${crew._id}/edit`}
						deleteFunc={deleteCrew}
					/>
				</Stack>
			</Stack>
		</ElementCard>
	)
}

export default CrewDetails
