import React from 'react'
import ElementCard from '../Miscellaneous/ElementCard'
import FormWrapper from '../Miscellaneous/FormWrapper'
import { FormControl, FormLabel, NumberInput, NumberInputField } from '@chakra-ui/react'

function MissionForm({ mission }) {
	return (
		<ElementCard>
			<FormWrapper>
				<FormControl>
					<FormLabel>Mission Number</FormLabel>
					<NumberInput>
						<NumberInputField />
					</NumberInput>
				</FormControl>
				<FormControl>
					<FormLabel>Number of Tasks</FormLabel>
					<NumberInput>
						<NumberInputField />
					</NumberInput>
				</FormControl>
			</FormWrapper>
		</ElementCard>
	)
}

export default MissionForm
