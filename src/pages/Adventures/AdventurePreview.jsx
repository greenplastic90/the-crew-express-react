import React, { useEffect, useState } from 'react'
import { getAdventureById } from '../../utilities/adventure-api'
import { useParams } from 'react-router-dom'
import { Stack, Text } from '@chakra-ui/react'
import AdventureDetails from '../../components/Adventure/AdventureDetails'
import CustomSpinner from '../../components/Miscellaneous/CustomSpinner'
import MissionDetails from '../../components/Mission/MissionDetails'
import ElementCard from '../../components/Miscellaneous/ElementCard'

function AdventurePreview() {
	const [adventure, setAdventure] = useState(null)
	const [missions, setMiossions] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	const { adventureId } = useParams()

	useEffect(() => {
		async function getAdventure() {
			try {
				const res = await getAdventureById(adventureId)
				const { adventure, missions } = await res.json()
				if (adventure && missions) {
					setAdventure(adventure)
					setMiossions(missions)
					setError('')
				} else {
					setError('Something went wrong! Please try again later.')
				}
			} catch (error) {
				console.log(error)
			}
			setIsLoading(false)
		}
		getAdventure()
	}, [adventureId])

	return (
		<>
			{!isLoading ? (
				<>
					{adventure && missions && (
						<Stack>
							<AdventureDetails adventure={adventure} />
							{missions.map((mission) => (
								<ElementCard key={mission._id}>
									<MissionDetails mission={mission} />
								</ElementCard>
							))}
						</Stack>
					)}
					{error && (
						<ElementCard>
							<Text>{error}</Text>
						</ElementCard>
					)}
				</>
			) : (
				<CustomSpinner />
			)}
		</>
	)
}

export default AdventurePreview
