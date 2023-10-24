import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigation } from '../Context/NavigationContext'
import {
	createAdventure,
	getAdventureByIdToUpdate,
	updateAdventure,
} from '../../utilities/adventure-api'
import { getUser } from '../../utilities/users-service'
import {
	Button,
	Checkbox,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
	Textarea,
	VStack,
} from '@chakra-ui/react'
import ElementCard from '../Miscellaneous/ElementCard'
import FormWrapper from '../Miscellaneous/FormWrapper'
import MissionForm from '../Mission/MissionForm'

function AdventureForm() {
	const [adventure, setAdventure] = useState({
		owner: getUser()._id,
		name: '',
		description: '',
		public: false,
	})
	const [missions, setMissions] = useState([])

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
				const { adventure, missions } = resJSON
				if ((adventure, missions)) {
					setAdventure(adventure)
					setMissions(missions)
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

	function handleAdventureTextInput(evt) {
		setAdventure({ ...adventure, [evt.target.name]: evt.target.value })
	}

	function handleMissionTextInput(missionId, evt) {
		const updatedMissions = missions.map((mission) =>
			mission._id === missionId ? { ...mission, [evt.target.name]: evt.target.value } : mission
		)
		setMissions(updatedMissions)
	}

	function handleMissionTasksChange(missionId, num) {
		const number = num <= 0 ? 0 : num
		const updatedMissions = missions.map((mission) =>
			mission._id === missionId ? { ...mission, tasks: number } : mission
		)
		setMissions(updatedMissions)
	}

	function handleMissionAddAndRemoveTaskToken(missionId, value, isChecked) {
		const TOKEN_ORDER = ['1', '2', '3', '4', '5', '>', '>>', '>>>', '>>>>', 'Ω']

		function sortTokensByOrder(a, b) {
			return TOKEN_ORDER.indexOf(a.value) - TOKEN_ORDER.indexOf(b.value)
		}

		// Find the mission that needs updating
		const missionToUpdate = missions.find((mission) => mission._id === missionId)
		if (!missionToUpdate) return

		let updatedTaskTokens

		if (isChecked) {
			// Add to the array if checked
			updatedTaskTokens = [...missionToUpdate.taskTokens, { value }]
		} else {
			// Remove from the array if unchecked
			updatedTaskTokens = missionToUpdate.taskTokens.filter((token) => token.value !== value)
		}

		// Sort taskTokens based on TOKEN_ORDER
		updatedTaskTokens.sort(sortTokensByOrder)

		// Replace the mission's taskTokens in the missions array
		const updatedMissions = missions.map((mission) =>
			mission._id === missionId ? { ...mission, taskTokens: updatedTaskTokens } : mission
		)

		setMissions(updatedMissions)
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
								onChange={handleAdventureTextInput}
								required
							/>
						</FormControl>

						<FormControl>
							<FormLabel>Description</FormLabel>
							<Textarea
								name='description'
								value={adventure.description}
								onChange={handleAdventureTextInput}
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

			<ElementCard>
				<VStack>
					<Heading>Missions</Heading>
				</VStack>
			</ElementCard>
			{missions.map((mission, i) => (
				<MissionForm
					key={mission._id}
					mission={{ ...mission, number: i + 1 }}
					onInputChange={handleMissionTextInput}
					onTasksChange={handleMissionTasksChange}
					onTokenChange={handleMissionAddAndRemoveTaskToken}
				/>
			))}
		</Stack>
	)
}

export default AdventureForm
