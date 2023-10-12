import { Box, Button, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ElementCard from '../Miscellaneous/ElementCard'
import { useNavigation } from '../Context/NavigationContext'
import { parseBoldText } from '../../utilities/miscellaneous'
import UpdateDeleteButtons from '../Miscellaneous/UpdateDeleteButtons'
import { getUser } from '../../utilities/users-service'

function AdventureDetails({
	adventure,
	deleteAdventure,
	showOnlyMyAdventures,
	showPreviewButton = false,
}) {
	const { _id, name, description, owner, official } = adventure
	const { handleNavigation } = useNavigation()

	const isOwner = owner._id === getUser()._id

	return (
		<ElementCard>
			<Stack flexGrow={1} justifyContent={'space-between'} spacing={8}>
				<Stack>
					<Heading variant={'adventure'}>{name}</Heading>
					{!official && (
						<HStack>
							<Text>Author:</Text>
							<Text color={'brand.brown.500'}>{owner.username}</Text>
						</HStack>
					)}

					<Text variant={'description'}>{parseBoldText(description)}</Text>
				</Stack>
				<Stack justifyItems={'end'}>
					{isOwner && showOnlyMyAdventures && (
						<Box alignSelf={'end'}>
							<UpdateDeleteButtons
								name={name}
								updateFormPath={`/adventures/${_id}/edit`}
								deleteFunc={() => deleteAdventure(_id)}
							/>
						</Box>
					)}
					{showPreviewButton && (
						<Button
							variant={'default'}
							w={'100%'}
							onClick={() => handleNavigation(`/adventures/${_id}/preview`, 'south')}>
							Preview
						</Button>
					)}

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
