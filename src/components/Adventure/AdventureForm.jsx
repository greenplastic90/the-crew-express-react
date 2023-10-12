import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigation } from '../Context/NavigationContext'
import {
	createAdventure,
	getAdventureByIdToUpdate,
	updateAdventure,
} from '../../utilities/adventure-api'
import { getUser } from '../../utilities/users-service'
import { Button, FormControl, FormLabel, Input, Stack, Textarea } from '@chakra-ui/react'
import ElementCard from '../Miscellaneous/ElementCard'
import FormWrapper from '../Miscellaneous/FormWrapper'

function AdventureForm() {
	const [adventure, setAdventure] = useState({
		owner: getUser()._id,
		name: '',
		description: '',
		public: false,
	})
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

	async function handleCreate(evt) {
		setIsLoading(true)
		evt.preventDefault()
		try {
			const res = await createAdventure(adventure)
			if (res.ok) {
				// const { crew } = await res.json()
				handleNavigation('/adventures', 'south-east')
			}
		} catch (error) {
			console.log(error)
		}
	}

	async function handleUpdate(evt) {
		evt.preventDefault()
		try {
			const res = await updateAdventure(adventure, adventureId)
			if (res.ok) {
				// const { crew } = await res.json()

				handleNavigation('/adventures', 'south-east')
			}
		} catch (error) {
			console.log(error)
		}
	}

	function handleTextInput(evt) {
		setAdventure({ ...adventure, [evt.target.name]: evt.target.value })
	}

	return (
		<Stack>
			<ElementCard>
				<form autoComplete='off' onSubmit={adventureId ? handleUpdate : handleCreate}>
					<FormWrapper>
						<FormControl>
							<FormLabel>Adventure Name</FormLabel>
							<Input
								type='text'
								name='name'
								value={adventure.name}
								onChange={handleTextInput}
								required
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Description</FormLabel>
							<Textarea
								name='name'
								value={adventure.description}
								onChange={handleTextInput}
								required
							/>
						</FormControl>
					</FormWrapper>
				</form>
				<Button variant={'advance'}>Add/Update Missions</Button>
			</ElementCard>
		</Stack>
	)
}

export default AdventureForm
