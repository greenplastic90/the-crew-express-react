import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigation } from '../Context/NavigationContext'
import { getAdventureByIdToUpdate } from '../../utilities/adventure-api'

function AdventureForm() {
	const [adventure, setAdventure] = useState({ name: '', description: '', public: false })
	const [isLoading, setIsLoading] = useState(true)

	//* if adventureId is truthy, this page edits, else it creates
	const { adventureId } = useParams()
	const { handleNavigation } = useNavigation()

	useEffect(() => {
		if (!adventureId) {
			setIsLoading(false)
			return
		}
		async function getAdventure() {
			try {
				const res = await getAdventureByIdToUpdate(adventureId)
				const resJSON = await res.json()
				const { adventure, missions } = resJSON
				console.log({ adventure })
				if (adventure && missions) {
					setAdventure(adventure)
				}
			} catch (error) {
				console.log(error)
			}
		}
		getAdventure()
		setIsLoading(false)
	}, [adventureId])

	return <div>AdventureForm</div>
}

export default AdventureForm
