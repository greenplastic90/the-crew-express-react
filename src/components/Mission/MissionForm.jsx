import React from 'react'
import ElementCard from '../Miscellaneous/ElementCard'
import FormWrapper from '../Miscellaneous/FormWrapper'
import { FormLabel, NumberInput, NumberInputField } from '@chakra-ui/react'

function MissionForm({ mission }) {
	return (
		<ElementCard>
			<FormWrapper>
				<FormLabel>Mission Number</FormLabel>
				<NumberInput>
					<NumberInputField />
				</NumberInput>
			</FormWrapper>
		</ElementCard>
	)
}

export default MissionForm
