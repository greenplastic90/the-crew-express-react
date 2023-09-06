import { HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Crew({ crew }) {
	const navigate = useNavigate()
	const { _id, name, memberNames } = crew

	return (
		<Stack border={'1px'} onClick={() => navigate(`/crew/${_id}`)}>
			<Heading as={'h2'} size={'lg'}>
				{name}
			</Heading>
			<HStack>
				{memberNames.map((member, i) => (
					<Text key={i}>{member}</Text>
				))}
			</HStack>
		</Stack>
	)
}

export default Crew
