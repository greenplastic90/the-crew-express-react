import { Checkbox, FormControl, FormLabel, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getCrewById } from '../../utilities/crew-api'
import { useParams } from 'react-router-dom'
import Missions from '../../components/Mission/Missions'

function Crew() {
	const [crew, setCrew] = useState(null)
	const [missions, setMissions] = useState([])
	const [filteredMissions, setFilteredMissions] = useState([])

	const [hideCompleted, setHideCompleted] = useState(false)
	const [showDistress, setShowDistress] = useState(false)

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
		const filtered = missions.filter(({ tracker }) => {
			if (!tracker) return false
			if (hideCompleted && tracker.completed) return false
			if (showDistress && !tracker.distressSignalUsed) return false
			return true
		})
		setFilteredMissions(filtered)
	}, [missions, hideCompleted, showDistress])

	return (
		<>
			{crew && (
				<Stack>
					<Heading as={'h1'} size={'4xl'}>
						{crew.name}
					</Heading>{' '}
					<HStack>
						{crew.memberNames.map((name, i) => (
							<Text key={i}>{name}</Text>
						))}
					</HStack>
					<FormControl>
						<FormLabel>Hide Completed</FormLabel>
						<Checkbox checked={hideCompleted} onChange={() => setHideCompleted(!hideCompleted)} />
					</FormControl>
					<FormControl>
						<FormLabel>Show Distress Signals</FormLabel>
						<Checkbox isChecked={showDistress} onChange={() => setShowDistress(!showDistress)} />
					</FormControl>
					<Text>Attempts: {crew.totalAttempts}</Text>
					<Missions missions={filteredMissions} />
				</Stack>
			)}
		</>
	)
}

export default Crew
