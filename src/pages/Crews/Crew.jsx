import { Checkbox, FormControl, FormLabel, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getCrewById } from '../../utilities/crew-api'
import { useParams } from 'react-router-dom'
import Missions from '../../components/Mission/Missions'

function Crew() {
	const [crew, setCrew] = useState(null)
	const [missions, setMissions] = useState([])
	const [filteredMissions, setFilteredMissions] = useState([])

	const [showFiltered, setShowFiltered] = useState(false)

	const { crewId } = useParams()

	//* getCrew
	useEffect(() => {
		async function getCrew() {
			try {
				const res = await getCrewById(crewId)
				const { crew, missionData } = await res.json()

				if (crew) setCrew(crew)
				if (missionData) setMissions(missionData)
			} catch (error) {
				console.log(error)
			}
		}
		getCrew()
	}, [crewId])

	//* Filter missions
	useEffect(() => {
		const filtered = missions.filter((mission) => {
			if (!mission.tracker) {
				return false
			}
			return !mission.tracker.completed
		})
		setFilteredMissions(filtered)
	}, [missions, showFiltered])

	return (
		<>
			{crew && (
				<Stack>
					<Heading as={'h1'} size={'4xl'}>
						{crew.name}
					</Heading>
					<FormControl>
						<FormLabel>Hide Completed</FormLabel>
						<Checkbox checked={showFiltered} onChange={() => setShowFiltered(!showFiltered)} />
					</FormControl>
					<HStack>
						{crew.memberNames.map((name, i) => (
							<Text key={i}>{name}</Text>
						))}
					</HStack>
					<Text>Attempts: {crew.totalAttempts}</Text>
					<Missions missions={showFiltered ? filteredMissions : missions} />
				</Stack>
			)}
		</>
	)
}

export default Crew
