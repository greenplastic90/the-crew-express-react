import React, { useState } from 'react'
import {
	FormControl,
	FormLabel,
	Heading,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Stack,
	Checkbox,
} from '@chakra-ui/react'

function MissionTrackerForm({ tracker }) {
	const [trackerInput, setTrackerInput] = useState(tracker)

	const handleAttemptsChange = (value) => {
		setTrackerInput({ ...trackerInput, attempts: value })
	}

	const handleCheckboxChange = (e) => {
		const { name, checked } = e.target
		let updateAttempts = {}
		// When distress singnal is used, increate attemps by 1!
		if (name === 'distressSignalUsed') {
			updateAttempts = checked
				? { attempts: trackerInput.attempts + 1 }
				: // Will not reduce attempts unless its more than 0
				trackerInput.attempts > 0
				? { attempts: trackerInput.attempts - 1 }
				: {}
		}

		setTrackerInput({ ...trackerInput, [name]: checked, ...updateAttempts })
	}

	return (
		<Stack>
			<Heading>Tracker</Heading>
			<form>
				<FormControl>
					<FormLabel>Attempts</FormLabel>
					<NumberInput
						onChange={(valueAsString, valueAsNumber) => handleAttemptsChange(valueAsNumber)}
						name='attempts'
						value={trackerInput.attempts}>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							{trackerInput.attempts > 0 && <NumberDecrementStepper />}
						</NumberInputStepper>
					</NumberInput>

					{/* Checkbox for distressSignalUsed */}
					<FormControl display='flex' alignItems='center'>
						<FormLabel htmlFor='distressSignalUsed' mb='0'>
							Distress Signal Used
						</FormLabel>
						<Checkbox
							id='distressSignalUsed'
							name='distressSignalUsed'
							isChecked={trackerInput.distressSignalUsed}
							onChange={handleCheckboxChange}
						/>
					</FormControl>

					{/* Checkbox for completed */}
					<FormControl display='flex' alignItems='center'>
						<FormLabel htmlFor='completed' mb='0'>
							Completed
						</FormLabel>
						<Checkbox
							id='completed'
							name='completed'
							isChecked={trackerInput.completed}
							onChange={handleCheckboxChange}
						/>
					</FormControl>
				</FormControl>
			</form>
		</Stack>
	)
}

export default MissionTrackerForm
