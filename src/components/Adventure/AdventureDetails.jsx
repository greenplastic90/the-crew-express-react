import { Button, HStack, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ElementCard from '../Miscellaneous/ElementCard'
import { useNavigation } from '../Context/NavigationContext'

function AdventureDetails({ adventure }) {
	const { name, description, owner, official } = adventure

	const { handleNavigation } = useNavigation()

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
			<HStack>
				<Button>Create Crew</Button>
				<Button onClick={() => handleNavigation('/adventure/preview', 'south')}>Preview</Button>
			</HStack>
		</ElementCard>
	)
}

export default AdventureDetails
