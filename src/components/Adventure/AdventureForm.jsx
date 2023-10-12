import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigation } from '../Context/NavigationContext'
import {
	createAdventure,
	getAdventureByIdToUpdate,
	updateAdventure,
} from '../../utilities/adventure-api'
import { getUser } from '../../utilities/users-service'
import { Button, Checkbox, FormControl, FormLabel, Input, Stack, Textarea } from '@chakra-ui/react'
import ElementCard from '../Miscellaneous/ElementCard'
import FormWrapper from '../Miscellaneous/FormWrapper'

function AdventureForm() {
	const [adventure, setAdventure] = useState({
		owner: getUser()._id,
		name: '',
		description: '',
		public: false,
	})

	//* if adventureId is truthy, this page edits, else it creates
	const { adventureId } = useParams()
	const { handleNavigation } = useNavigation()

	useEffect(() => {
		if (!adventureId) {
			return
		}
		async function getAdventure() {
			try {
				const res = await getAdventureByIdToUpdate(adventureId)
				const resJSON = await res.json()
				const { adventure } = resJSON
				if (adventure) {
					setAdventure(adventure)
				}
			} catch (error) {
				console.log(error)
			}
		}
		getAdventure()
	}, [adventureId])

	async function handleCreateAndUpdate(evt) {
		evt.preventDefault()
		try {
			const res = adventureId
				? await updateAdventure(adventure, adventureId)
				: await createAdventure(adventure)

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
				<form autoComplete='off' onSubmit={handleCreateAndUpdate}>
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
								name='description'
								value={adventure.description}
								onChange={handleTextInput}
								required
							/>
						</FormControl>
						<Checkbox
							isChecked={adventure.public}
							value={adventure.public}
							onChange={() => setAdventure({ ...adventure, public: !adventure.public })}>
							Make Public
						</Checkbox>

						<Button type='submit' variant={'confirm'}>
							Done
						</Button>
					</FormWrapper>
				</form>
				<Button variant={'advance'}>Add/Update Missions</Button>
			</ElementCard>
		</Stack>
	)
}

export default AdventureForm
