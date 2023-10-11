import React, { useEffect, useState } from 'react'
import { FormLabel, Input, Button, HStack, FormControl, Stack, InputGroup } from '@chakra-ui/react'
import { createCrew, getCrewById, updateCrew } from '../../utilities/crew-api'
import { useLocation, useParams } from 'react-router-dom'
import ElementCard from '../Miscellaneous/ElementCard'
import FormWrapper from '../Miscellaneous/FormWrapper'
import { useNavigation } from '../Context/NavigationContext'

function CrewForm() {
	const [crew, setCrew] = useState({ name: '', memberNames: ['', ''] })
	const [isLoading, setIsLoading] = useState(true)

	//* if crewId is truthy, this page edits, else it creates
	const { crewId } = useParams()
	const location = useLocation()

	const { handleNavigation } = useNavigation()

	useEffect(() => {
		// if crewId isn't in the params - no need to make api call (we're creating a new crew not updating)
		if (!crewId) {
			//if the state not passed, ie the adventure id isn't passed.. we direct back to home - since the crew won't have an adventure id to create all the missions
			if (!location.state) {
				handleNavigation('/', 'south')
			}
			setIsLoading(false)
			return
		}

		async function getCrew() {
			try {
				const res = await getCrewById(crewId)
				const resJSON = await res.json()
				if (resJSON.crew) setCrew(resJSON.crew)
			} catch (error) {
				console.log(error)
			}
		}
		getCrew()
		setIsLoading(false)
	}, [crewId, handleNavigation, location.state])

	function handleNameChange(e) {
		setCrew({ ...crew, name: e.target.value })
	}

	function handleMemberChange(e, index) {
		const newMembersInput = [...crew.memberNames]
		newMembersInput[index] = e.target.value
		setCrew({ ...crew, memberNames: newMembersInput })
	}

	function addMemberInput() {
		const addedMemberName = [...crew.memberNames, '']
		setCrew({ ...crew, memberNames: addedMemberName })
	}

	function deleteMember(index) {
		const newMembersInput = [...crew.memberNames]
		newMembersInput.splice(index, 1)
		setCrew({ ...crew, memberNames: newMembersInput })
	}

	async function handleCreate(evt) {
		setIsLoading(true)
		evt.preventDefault()
		try {
			const res = await createCrew({ ...crew, adventure: location.state.adventureId })
			if (res.ok) {
				// const { crew } = await res.json()
				handleNavigation('/crews', 'south-east')
			}
		} catch (error) {
			console.log(error)
		}
	}

	async function handleUpdate(evt) {
		evt.preventDefault()
		try {
			const res = await updateCrew(crew, crewId)
			if (res.ok) {
				// const { crew } = await res.json()

				handleNavigation('/crews', 'south-east')
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<form autoComplete='off' onSubmit={crewId ? handleUpdate : handleCreate}>
			<ElementCard>
				<FormWrapper>
					<FormControl>
						<FormLabel>Crew Name</FormLabel>
						<Input
							type='text'
							name='name'
							value={crew.name}
							onChange={handleNameChange}
							placeholder='eg. Space Bouncers'
							required
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Members</FormLabel>
						<Stack pb={4}>
							{crew.memberNames.map((member, index) => (
								<HStack key={index}>
									<InputGroup>
										{/* <InputLeftElement pointerEvents='none' justifyContent={'center'}>
											<HelmetIcon index={index} />
										</InputLeftElement> */}
										<Input
											// pl={12}
											type='text'
											value={member}
											onChange={(e) => handleMemberChange(e, index)}
											placeholder={`Member Name`}
											required
										/>
									</InputGroup>
									{crew.memberNames.length > 2 && (
										<Button
											onClick={() => deleteMember(index)}
											colorScheme='brand.platinum'
											color={'brand.platinum.900'}>
											X
										</Button>
									)}
								</HStack>
							))}
							{crew.memberNames.length < 5 && (
								<>
									<Button p={6} onClick={addMemberInput} isDisabled={isLoading} variant={'advance'}>
										Add Member
									</Button>
								</>
							)}
						</Stack>
					</FormControl>
				</FormWrapper>
				<Button type='submit' isDisabled={isLoading} variant={'confirm'}>
					Done
				</Button>
			</ElementCard>
		</form>
	)
}

export default CrewForm
