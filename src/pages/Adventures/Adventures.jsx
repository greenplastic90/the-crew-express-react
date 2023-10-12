import React, { useEffect, useState } from 'react'

import AdventuresDisplay from '../../components/Adventure/AdventuresDisplay'
import { Button, Stack, Text } from '@chakra-ui/react'
import { useNavigation } from '../../components/Context/NavigationContext'
import ElementCard from '../../components/Miscellaneous/ElementCard'
import { deleteAdventureById, getAllAdventures } from '../../utilities/adventure-api'
import CustomSpinner from '../../components/Miscellaneous/CustomSpinner'

function Adventures() {
	const [adventures, setAdventures] = useState([])
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	const { handleNavigation } = useNavigation()

	useEffect(() => {
		async function getAllAvilableAdventures() {
			try {
				const res = await getAllAdventures()
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
		getAllAvilableAdventures()
	}, [])

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
	return (
		<Stack>
			<ElementCard>
				<Button variant={'advance'} onClick={() => handleNavigation('/adventures/new', 'north')}>
					Create Adventure
				</Button>
			</ElementCard>
			{!isLoading ? (
				<>
					<AdventuresDisplay adventures={adventures} deleteAdventure={deleteAdventure} />
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
