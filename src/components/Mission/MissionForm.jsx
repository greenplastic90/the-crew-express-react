import React from 'react'
import ElementCard from '../Miscellaneous/ElementCard'
import FormWrapper from '../Miscellaneous/FormWrapper'
import {
	FormControl,
	FormLabel,
	NumberInput,
	NumberInputField,
	Radio,
	Textarea,
} from '@chakra-ui/react'
import TaskToken from './TaskToken'

function MissionForm({ mission }) {
	const taskTokens = ['1', '2', '3', '4', '5', '>', '>>', '>>>', '>>>>', 'Ω']
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
				<FormControl>
					<FormLabel>Task Tokens</FormLabel>
					{taskTokens.map((token) => (
						<Radio>
							<TaskToken value={token} />
						</Radio>
					))}
				</FormControl>
				<FormControl>
					<FormLabel>Mission Description</FormLabel>
					<Textarea />
				</FormControl>
			</FormWrapper>
		</ElementCard>
	)
}

export default MissionForm
