import { Button, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ElementCard from '../Miscellaneous/ElementCard'
import { useNavigation } from '../Context/NavigationContext'
import { parseBoldText } from '../../utilities/miscellaneous'
import UpdateDeleteButtons from '../Miscellaneous/UpdateDeleteButtons'
import { getUser } from '../../utilities/users-service'

function AdventureDetails({ adventure, showPreviewButton = false }) {
	const { _id, name, description, owner, official } = adventure
	const { handleNavigation } = useNavigation()

	const isOwner = owner._id === getUser()._id

	return (
		<ElementCard>
			<Stack spacing={8}>
				<Heading variant={'adventure'}>{name}</Heading>
				{!official && (
					<HStack>
						<Text>Author:</Text>
						<Text color={'brand.brown.500'}>{owner.username}</Text>
					</HStack>
				)}

				<Text variant={'description'}>{parseBoldText(description)}</Text>
				<Stack>
					<HStack>
						{showPreviewButton && (
							<Button
								variant={'default'}
								w={'100%'}
								onClick={() => handleNavigation(`/adventures/${_id}/preview`, 'south')}>
								Preview
							</Button>
						)}
						{isOwner && (
							<UpdateDeleteButtons
								name={name}
								updateFormPath={`/adventures/${_id}/edit`}
								deleteFunc={() => console.log('Not implemented yet')}
							/>
						)}
					</HStack>
					<Button
						variant={'advance'}
						w={'100%'}
						onClick={() => handleNavigation('/crews/new', 'north', { adventureId: _id })}>
						Create Crew
					</Button>
				</Stack>
			</Stack>
		</ElementCard>
	)
}

export default AdventureDetails
