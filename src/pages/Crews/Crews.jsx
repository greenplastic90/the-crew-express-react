import { Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CrewsDisplay from '../../components/Crew/CrewsDisplay'
import PageWrapper from '../../components/Miscellaneous/PageWrapper'

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
