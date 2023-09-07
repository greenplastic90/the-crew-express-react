import React from 'react'
import { Stack, Heading } from '@chakra-ui/react'
import CrewForm from '../../components/Crew/CrewForm'

function NewCrew() {
	return (
		<Stack>
			<Heading as={'h1'} size={'4xl'}>
				New Crew
			</Heading>
			<CrewForm />
		</Stack>
	)
}

export default NewCrew
