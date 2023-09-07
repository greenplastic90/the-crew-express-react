import React from 'react'
import { Stack, Heading } from '@chakra-ui/react'
import CrewForm from '../../components/Crew/CrewForm'

function UpdateCrew() {
	return (
		<Stack>
			<Heading as={'h1'} size={'4xl'}>
				Edit Crew Name
			</Heading>
			<CrewForm />
		</Stack>
	)
}

export default UpdateCrew
