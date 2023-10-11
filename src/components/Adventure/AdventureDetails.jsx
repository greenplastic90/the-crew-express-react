import { Button, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ElementCard from '../Miscellaneous/ElementCard'
import { MdDeleteForever, MdEditSquare } from 'react-icons/md'
import { useNavigation } from '../Context/NavigationContext'
import { parseBoldText } from '../../utilities/miscellaneous'

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
				<Text variant={'description'}>{parseBoldText(description)}</Text>
				<HStack>
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

					<Button variant={'default'}>
						<MdEditSquare size={50} />
					</Button>
				</HStack>
			</Stack>
		</ElementCard>
	)
}

export default AdventureDetails
