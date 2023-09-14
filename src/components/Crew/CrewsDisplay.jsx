import React, { useEffect, useState } from 'react'
import { getAllCrews } from '../../utilities/crew-api'
import CrewDetails from './CrewDetails'
import { Spinner, Stack, Text } from '@chakra-ui/react'

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
					setCrews(crews)
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
				<Stack>
					{crews.map((crew, i) => (
						<CrewDetails key={crew._id} crew={crew} setCrews={setCrews} index={i} />
					))}
				</Stack>
			) : (
				<Spinner />
			)}
			{error && <Text color={'red.500'}>{error}</Text>}
		</Stack>
	)
}

export default CrewsDisplay
