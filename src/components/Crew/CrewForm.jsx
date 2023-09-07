import React, { useEffect, useState } from 'react'
import { Stack, FormLabel, Input, Button, HStack } from '@chakra-ui/react'
import { createCrew, getCrewById, updateCrew } from '../../utilities/crew-api'
import { useNavigate, useParams } from 'react-router-dom'

function CrewForm() {
	const [crew, setCrew] = useState({ name: '', memberNames: ['', ''] })
	//* if crewId is truthy, this page edits, else it creates
	const { crewId } = useParams()

	const navigate = useNavigate()

	useEffect(() => {
		if (!crewId) return

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

	async function handelCreate(evt) {
		evt.preventDefault()
		try {
			const res = await createCrew(crew)
			if (res.ok) {
				const { crew } = await res.json()
				navigate(`/crew/${crew._id}`)
			}
		} catch (error) {
			console.log(error)
		}
	}

	async function handelUpdate(evt) {
		evt.preventDefault()
		try {
			const res = await updateCrew(crew, crewId)
			if (res.ok) {
				const { crew } = await res.json()
				navigate(`/crew/${crew._id}`)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<form autoComplete='off' onSubmit={crewId ? handelUpdate : handelCreate}>
			<Stack>
				{/*//! Bring back heading and add terneray */}
				<FormLabel>Name</FormLabel>
				<Input type='text' name='name' value={crew.name} onChange={handleNameChange} required />

				<FormLabel>Members</FormLabel>
				{crew.memberNames.map((member, index) => (
					<HStack key={index}>
						<Input
							type='text'
							value={member}
							onChange={(e) => handleMemberChange(e, index)}
							placeholder={`Member ${index + 1}`}
							required
						/>
						{crew.memberNames.length > 2 && <Button onClick={() => deleteMember(index)}>X</Button>}
					</HStack>
				))}

				{crew.memberNames.length < 5 && <Button onClick={addMemberInput}>Add Member</Button>}
				<Button type='submit'>Done</Button>
			</Stack>
		</form>
	)
}

export default CrewForm
