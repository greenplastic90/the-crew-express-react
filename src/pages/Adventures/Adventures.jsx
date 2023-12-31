import React, { useEffect, useState } from 'react'

import AdventuresDisplay from '../../components/Adventure/AdventuresDisplay'
import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import { useNavigation } from '../../components/Context/NavigationContext'
import ElementCard from '../../components/Miscellaneous/ElementCard'
import {
	deleteAdventureById,
	getAllAdventures,
	getAllAdventuresForAUser,
} from '../../utilities/adventure-api'
import CustomSpinner from '../../components/Miscellaneous/CustomSpinner'

function Adventures() {
	const [adventures, setAdventures] = useState([])
	const [showOnlyMyAdventures, setShowOnlyMyAdventures] = useState(false)
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	const { handleNavigation } = useNavigation()

	useEffect(() => {
		getAllAvilableAdventures()
	}, [])

	async function getAllAvilableAdventures() {
		try {
			const res = await getAllAdventures()
			const { adventures } = await res.json()

			if (adventures) {
				const sortedAdventures = adventures.sort(
					(a, b) => new Date(a.createdAt) - new Date(b.createdAt)
				)

				setAdventures(sortedAdventures)
				setError('')
			} else {
				setError('Something went wrong! Please try again later.')
			}
		} catch (error) {
			console.log(error)
		}
		setIsLoading(false)
	}

	async function getMyAdventures() {
		try {
			const res = await getAllAdventuresForAUser()
			const { adventures } = await res.json()

			if (adventures) {
				const sortedAdventures = adventures.sort(
					(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
				)

				setAdventures(sortedAdventures)
				setError('')
			} else {
				setError('Something went wrong! Please try again later.')
			}
		} catch (error) {
			console.log(error)
		}
		setIsLoading(false)
	}

	async function deleteAdventure(adventureId) {
		try {
			const res = await deleteAdventureById(adventureId)
			const { message } = await res.json()

			if (message) {
				setAdventures((adventures) => {
					return adventures.filter((a) => a._id !== adventureId)
				})
			}
		} catch (error) {
			console.log(error)
		}
	}

	function handleAdventureToggle() {
		!showOnlyMyAdventures ? getMyAdventures() : getAllAvilableAdventures()
		setShowOnlyMyAdventures(!showOnlyMyAdventures)
	}

	return (
		<Stack>
			<ElementCard>
				<Button
					variant={showOnlyMyAdventures ? 'advance' : 'negative'}
					onClick={handleAdventureToggle}>
					{showOnlyMyAdventures ? 'Show All Adventures' : 'Show My Adventures'}
				</Button>
				<Button variant={'confirm'} onClick={() => handleNavigation('/adventures/new', 'north')}>
					Create Adventure
				</Button>
			</ElementCard>
			<ElementCard>
				<VStack>
					<Heading>{showOnlyMyAdventures ? 'My Adventures' : 'All Adventures'}</Heading>
				</VStack>
			</ElementCard>
			{!isLoading ? (
				<>
					<AdventuresDisplay
						adventures={adventures}
						deleteAdventure={deleteAdventure}
						showOnlyMyAdventures={showOnlyMyAdventures}
					/>
					{error && (
						<ElementCard>
							<Text color={'red.500'}>{error}</Text>
						</ElementCard>
					)}
				</>
			) : (
				<CustomSpinner />
			)}
		</Stack>
	)
}

export default Adventures
