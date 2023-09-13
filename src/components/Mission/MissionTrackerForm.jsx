import React, { useState } from 'react'

import {
	FormControl,
	FormLabel,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Stack,
	Checkbox,
	Text,
	Button,
} from '@chakra-ui/react'
import { editTracker } from '../../utilities/mission-api'

function MissionTrackerForm({ tracker, updateMissionTracker }) {
	const [trackerInput, setTrackerInput] = useState(tracker)
	const [error, setError] = useState('')

	const handleAttemptsChange = (value) => {
		const validValue = isNaN(value) || value < 0 ? 0 : value
		setTrackerInput({ ...trackerInput, attempts: validValue })
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

		if (name === 'completed') {
			if (trackerInput.attempts <= 0) {
				updateAttempts = { attempts: 1 }
			}
		}

		setTrackerInput({ ...trackerInput, [name]: checked, ...updateAttempts })
	}
	async function updateTracker() {
		const { attempts, distressSignalUsed, completed } = trackerInput
		try {
			const res = await editTracker({ attempts, distressSignalUsed, completed }, trackerInput._id)
			const { missionTracker } = await res.json()
			if (missionTracker) {
				updateMissionTracker(missionTracker)
			} else {
				setError("Something went wrong, Can't save your progress right now!")
			}
			setError('')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Stack flexDir={'row'}>
			<FormControl>
				<FormLabel>Attempts</FormLabel>
				<NumberInput
					onChange={(valueAsString, valueAsNumber) => handleAttemptsChange(valueAsNumber)}
					name='attempts'
					value={trackerInput.attempts}
					isDisabled={trackerInput.completed}>
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
						isDisabled={trackerInput.completed}
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
			<Button onClick={updateTracker}>update</Button>

			{error && <Text color={'red.500'}>{error}</Text>}
		</Stack>
	)
}

export default MissionTrackerForm
