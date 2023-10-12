import React, { useEffect, useState } from 'react'
import { getAllAdventures } from '../../utilities/adventure-api'
import { Stack, Text } from '@chakra-ui/react'
import CustomSpinner from '../Miscellaneous/CustomSpinner'
import AdventureDetails from './AdventureDetails'
import CustomGrid from '../Miscellaneous/CustomGrid'

function AdventuresDisplay() {
	const [adventures, setAdventures] = useState([])
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(true)

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

	return (
		<Stack>
			{!isLoading ? (
				<CustomGrid>
					{adventures.map((adventure) => (
						<AdventureDetails
							key={adventure._id}
							adventure={adventure}
							setAdventures={setAdventures}
							showPreviewButton={true}
						/>
					))}
				</CustomGrid>
			) : (
				<CustomSpinner />
			)}
			{error && <Text color={'red.500'}>{error}</Text>}
		</Stack>
	)
}

export default AdventuresDisplay
