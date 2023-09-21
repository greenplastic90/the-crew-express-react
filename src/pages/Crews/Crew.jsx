import {
	Box,
	Checkbox,
	FormControl,
	FormLabel,
	HStack,
	Heading,
	Spinner,
	Text,
} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { getCrewById } from '../../utilities/crew-api'
import { useNavigate, useParams } from 'react-router-dom'
import Missions from '../../components/Mission/Missions'
import Members from './Memebers'
import PageWrapper from '../../components/Miscellaneous/PageWrapper'
import ElementCard from '../../components/Miscellaneous/ElementCard'

function Crew() {
	const [crew, setCrew] = useState(null)
	const [missions, setMissions] = useState([])
	const [filteredMissions, setFilteredMissions] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [hideCompleted, setHideCompleted] = useState(true)
	const [showDistress, setShowDistress] = useState(false)

	const navigate = useNavigate()
	const { crewId } = useParams()

	const updateMissionTracker = (updatedTracker) => {
		const updatedMissions = missions.map((mission) => {
			if (mission.tracker._id === updatedTracker._id) {
				return { ...mission, tracker: updatedTracker }
			}
			return mission
		})
		setMissions(updatedMissions)
	}

	//* getCrew
	useEffect(() => {
		async function getCrew() {
			try {
				const res = await getCrewById(crewId)
				if (!res.ok) {
					navigate('/')
					return
				}
				const { crew, missionData } = await res.json()

				if (crew) setCrew(crew)
				if (missionData) setMissions(missionData)
			} catch (error) {
				console.log(error)
			}
		}
		getCrew()
		setIsLoading(false)
	}, [crewId, navigate])

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

	return !isLoading ? (
		<>
			{crew && (
				<PageWrapper title={crew.name} Component={<Members members={crew.memberNames} />}>
					<Missions missions={filteredMissions} updateMissionTracker={updateMissionTracker} />
				</PageWrapper>
			)}
		</>
	) : (
		<Spinner />
	)
}

export default Crew
