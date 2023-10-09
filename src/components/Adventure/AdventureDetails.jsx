import { HStack, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ElementCard from '../Miscellaneous/ElementCard'

function AdventureDetails({ adventure, setAdventures }) {
	const { name, description, owner, official } = adventure
	return (
		<ElementCard>
			<Heading variant={'adventure'}>{name}</Heading>
			{!official && (
				<HStack>
					<Text>Author :</Text>
					<Text color={'brand.brown.500'}>{owner.username}</Text>
				</HStack>
			)}
			<Text>{description}</Text>
		</ElementCard>
	)
}

export default AdventureDetails
