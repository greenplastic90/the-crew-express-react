import React, { useEffect, useState } from 'react'
import {
	FormLabel,
	Input,
	Button,
	HStack,
	FormControl,
	Stack,
	InputLeftElement,
	InputGroup,
} from '@chakra-ui/react'
import { createCrew, getCrewById, updateCrew } from '../../utilities/crew-api'
import HelmetIcon from './HelmetIcon'
import { useNavigate, useParams } from 'react-router-dom'
import ElementCard from '../Miscellaneous/ElementCard'
import FormWrapper from '../Miscellaneous/FormWrapper'
import { useBackgroundScroll } from '../Context/BackgroundScrollContext'

function CrewForm() {
	const [crew, setCrew] = useState({ name: '', memberNames: ['', ''] })
	const [isLoading, setIsLoading] = useState(true)
	//* if crewId is truthy, this page edits, else it creates
	const { crewId } = useParams()

	const navigate = useNavigate()
	const { handleBackgroundScroll } = useBackgroundScroll()

	useEffect(() => {
		if (!crewId) {
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
	}, [crewId])

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
			const res = await createCrew(crew)
			if (res.ok) {
				const { crew } = await res.json()
				navigate(`/crew/${crew._id}`)
				handleBackgroundScroll('south-east')
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
				const { crew } = await res.json()
				navigate(`/crew/${crew._id}`)
				handleBackgroundScroll('south-east')
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
						<FormLabel>Name</FormLabel>
						<Input type='text' name='name' value={crew.name} onChange={handleNameChange} required />
					</FormControl>
					<FormControl>
						<FormLabel>Members</FormLabel>
						<Stack>
							{crew.memberNames.map((member, index) => (
								<HStack key={index}>
									<InputGroup>
										<InputLeftElement>
											<HelmetIcon index={index} />
										</InputLeftElement>
										<Input
											pl={12}
											type='text'
											value={member}
											onChange={(e) => handleMemberChange(e, index)}
											placeholder={`Member ${index + 1}`}
											required
										/>
									</InputGroup>
									{crew.memberNames.length > 2 && (
										<Button onClick={() => deleteMember(index)}>X</Button>
									)}
								</HStack>
							))}
							{crew.memberNames.length < 5 && (
								<>
									<Button p={6} onClick={addMemberInput} isDisabled={isLoading}>
										<HelmetIcon index={crew.memberNames.length} />
									</Button>
								</>
							)}
						</Stack>
					</FormControl>
				</FormWrapper>
				<Button type='submit' isDisabled={isLoading}>
					Done
				</Button>
			</ElementCard>
		</form>
	)
}

export default CrewForm
