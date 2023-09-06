import React, { useState } from 'react'
import { Stack, Heading, FormLabel, Input, Button, HStack } from '@chakra-ui/react'

function NewCrew() {
	const [crew, setCrew] = useState({ name: '', memberNames: ['', ''] })

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

	return (
		<form>
			<Stack>
				<Heading as={'h1'} size={'2xl'}>
					New Crew
				</Heading>
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

export default NewCrew
