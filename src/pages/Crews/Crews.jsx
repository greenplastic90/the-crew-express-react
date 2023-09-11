import { Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import CrewsDisplay from '../../components/Crew/CrewsDisplay'

function Crews({ user }) {
	const navigate = useNavigate()

	return (
		<PageWrapper title={`${user.username}'s Crews`}>
			<Stack>
				<Button onClick={() => navigate('/crew/new')}>Assemble Crew</Button>
				<CrewsDisplay />
			</Stack>
		</PageWrapper>
	)
}

export default Crews
