import React, { useEffect, useState } from 'react'
import { getAllCrews } from '../../utilities/crew-api'
import CrewDetails from './CrewDetails'
import { Grid, Stack, Text } from '@chakra-ui/react'
import CustomSpinner from '../Miscellaneous/CustomSpinner'

function CrewsDisplay() {
	const [crews, setCrews] = useState([])
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		async function getUserCrews() {
			try {
				const res = await getAllCrews()
				const { crews } = await res.json()

				if (crews) {
					const sortedCrews = crews.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
					setCrews(sortedCrews)
					setError('')
				} else {
					setError('Something went wrong! Please try again later.')
				}
			} catch (error) {
				console.log(error)
			}
			setIsLoading(false)
		}
		getUserCrews()
	}, [])
	return (
		<Stack>
			{!isLoading ? (
				<Grid
					templateColumns={['repeat(1, 1fr)', null, null, null, null, 'repeat(2, 1fr)']}
					gap={2}>
					{crews.map((crew) => (
						<CrewDetails key={crew._id} crew={crew} setCrews={setCrews} />
					))}
				</Grid>
			) : (
				<CustomSpinner />
			)}
			{error && <Text color={'red.500'}>{error}</Text>}
		</Stack>
	)
}

export default CrewsDisplay
