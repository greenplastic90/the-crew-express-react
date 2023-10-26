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
import { createMission, deleteMissionById } from '../../utilities/mission-api'

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

	async function addMission() {
		const defaultMission = {
			number: missions.length + 1,
			fivePlayerRule: false,
			tasks: 0,
			description: '',
			taskTokens: [],
			adventure: adventure._id,
		}

		const res = await createMission(defaultMission)
		const resJSON = await res.json()
		const { mission: newMission } = resJSON
		if (newMission) {
			setMissions([...missions, newMission])
		}
	}

	async function deleteMission(missionId) {
		const res = await deleteMissionById(missionId)
		const resJSON = await res.json()
		const { message, missions } = resJSON
		console.log({ missions, message })
		if (missions) setMissions(missions)
	}

	async function handleCreateAndUpdate(evt) {
		evt.preventDefault()
		try {
			const res = adventureId
				? await updateAdventure(adventure, adventureId, missions)
				: await createAdventure(adventure)

			if (res.ok) {
				const { adventure } = await res.json()

				adventureId
					? handleNavigation('/adventures', 'south-east')
					: handleNavigation(`/adventures/${adventure._id}/edit`, 'north')
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

	function handleMissionTaskTokenToggle(missionId, value, isChecked) {
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

	function handleMissionFivePlayerRuleToggle(missionId) {
		const updatedMissions = missions.map((mission) =>
			mission._id === missionId ? { ...mission, fivePlayerRule: !mission.fivePlayerRule } : mission
		)
		setMissions(updatedMissions)
	}

	return (
		<Stack spacing={4}>
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
							{adventureId ? 'Save All Changes' : 'Create'}
						</Button>
					</FormWrapper>
				</form>
			</ElementCard>

			{missions.length > 0 && (
				<ElementCard>
					<VStack>
						<Heading>Missions</Heading>
					</VStack>
				</ElementCard>
			)}
			{missions.map((mission, i) => (
				<MissionForm
					key={mission._id}
					mission={mission}
					deleteMission={deleteMission}
					onInputChange={handleMissionTextInput}
					onTasksChange={handleMissionTasksChange}
					onTokenChange={handleMissionTaskTokenToggle}
					onFivePlayerRuleChange={handleMissionFivePlayerRuleToggle}
				/>
			))}
			{/* can't add a mission until the adventure is saved and has an id */}
			{adventureId && (
				<ElementCard>
					{missions.length > 0 && (
						<Button onClick={handleCreateAndUpdate} variant={'confirm'}>
							Save All Changes
						</Button>
					)}
					<Button onClick={addMission} variant={'advance'}>
						Add Misson
					</Button>
				</ElementCard>
			)}
		</Stack>
	)
}

export default AdventureForm
