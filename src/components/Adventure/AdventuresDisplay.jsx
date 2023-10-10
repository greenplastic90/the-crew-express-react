import React, { useEffect, useState } from 'react'
import { getAllAdventures } from '../../utilities/adventure-api'
import { Grid, Stack, Text } from '@chakra-ui/react'
import CustomSpinner from '../Miscellaneous/CustomSpinner'
import AdventureDetails from './AdventureDetails'

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
				<Grid
					templateColumns={['repeat(1, 1fr)', null, null, null, null, 'repeat(2, 1fr)']}
					gap={2}>
					{adventures.map((adventure) => (
						<AdventureDetails key={adventure._id} adventure={adventure} showPreviewButton={true} />
					))}
				</Grid>
			) : (
				<CustomSpinner />
			)}
			{error && <Text color={'red.500'}>{error}</Text>}
		</Stack>
	)
}

export default AdventuresDisplay
