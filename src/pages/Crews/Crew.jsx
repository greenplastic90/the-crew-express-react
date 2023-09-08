import { HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getCrewById } from '../../utilities/crew-api'
import { useParams } from 'react-router-dom'
import Missions from '../../components/Mission/Missions'

function Crew() {
	const [crew, setCrew] = useState(null)
	const [missions, setMissions] = useState([])

	const { crewId } = useParams()

	useEffect(() => {
		async function getCrew() {
			const res = await getCrewById(crewId)
			const { crew, missionData } = await res.json()

			if (crew) setCrew(crew)
			if (missionData) setMissions(missionData)
		}
		getCrew()
	}, [crewId])
	return (
		<>
			{crew && (
				<Stack>
					<Heading as={'h1'} size={'4xl'}>
						{crew.name}
					</Heading>
					<HStack>
						{crew.memberNames.map((name, i) => (
							<Text key={i}>{name}</Text>
						))}
					</HStack>
					<Text>Attempts: {crew.totalAttempts}</Text>
					<Missions missions={missions} />
				</Stack>
			)}
		</>
	)
}

export default Crew
