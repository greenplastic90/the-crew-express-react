import React, { useState } from 'react'
import { Stack, Heading, FormLabel, Input, Button } from '@chakra-ui/react'

function NewCrew() {
	const [crew, setCrew] = useState({ name: '', memberNames: [''] })

	const [error, setError] = useState('')
	//! error if less than two and more than 5

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

	return (
		<Stack>
			<Heading as={'h1'} size={'2xl'}>
				New Crew
			</Heading>
			<FormLabel>Name</FormLabel>
			<Input type='text' name='name' value={crew.name} onChange={handleNameChange} required />

			<FormLabel>Members</FormLabel>
			{crew.memberNames.map((member, index) => (
				<Input
					key={index}
					type='text'
					value={member}
					onChange={(e) => handleMemberChange(e, index)}
					placeholder={`Member ${index + 1}`}
					required
				/>
			))}

			<Button onClick={addMemberInput}>Add Member</Button>
		</Stack>
	)
}

export default NewCrew
