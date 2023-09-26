import { Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CrewsDisplay from '../../components/Crew/CrewsDisplay'
import { useBackgroundScroll } from '../../components/Context/BackgroundScrollContext'

function Crews({ user }) {
	const navigate = useNavigate()
	const { handleBackgroundScroll } = useBackgroundScroll()

	function handleNavigation() {
		navigate('/crew/new')
		handleBackgroundScroll('south', 200)
	}

	return (
		<Stack>
			<Button onClick={handleNavigation}>Assemble Crew</Button>
			<CrewsDisplay />
		</Stack>
	)
}

export default Crews
