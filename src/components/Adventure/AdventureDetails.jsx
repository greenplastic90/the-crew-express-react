import { Button, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ElementCard from '../Miscellaneous/ElementCard'
import { useNavigation } from '../Context/NavigationContext'

function AdventureDetails({ adventure, showPreviewButton = false }) {
	const { _id, name, description, owner, official } = adventure

	const { handleNavigation } = useNavigation()

	return (
		<ElementCard>
			<Stack spacing={8}>
				<Heading variant={'adventure'}>{name}</Heading>
				{!official && (
					<HStack>
						<Text>Author :</Text>
						<Text color={'brand.brown.500'}>{owner.username}</Text>
					</HStack>
				)}
				<Text variant={'description'}>{description}</Text>
				<HStack>
					{showPreviewButton && (
						<Button
							w={'100%'}
							onClick={() => handleNavigation(`/adventures/${_id}/preview`, 'south')}>
							Preview
						</Button>
					)}
					<Button
						w={'100%'}
						onClick={() => handleNavigation('/crew/new', 'north', { adventureId: _id })}>
						Create Crew
					</Button>
				</HStack>
			</Stack>
		</ElementCard>
	)
}

export default AdventureDetails
