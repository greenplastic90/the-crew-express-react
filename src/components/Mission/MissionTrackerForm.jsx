import React, { useState } from 'react'
import { MdOutlineSatelliteAlt } from 'react-icons/md'
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
	Circle,
	Center,
} from '@chakra-ui/react'
import { editTracker } from '../../utilities/mission-api'

function MissionTrackerForm({ tracker, updateMissionTracker }) {
	const [error, setError] = useState('')
	const { _id, attempts, completed, distressSignalUsed } = tracker

	const handleAttemptsChange = (value) => {
		const validValue = isNaN(value) || value < 0 ? 0 : value
		updateTracker({ ...tracker, attempts: validValue })
	}

	const handleCheckboxChange = (e) => {
		const { name, checked } = e.target
		let updateAttempts = {}
		// When distress singnal is used, increate attemps by 1!
		if (name === 'distressSignalUsed') {
			updateAttempts = checked
				? { attempts: attempts + 1 }
				: // Will not reduce attempts unless its more than 0
				attempts > 0
				? { attempts: attempts - 1 }
				: {}
		}

		if (name === 'completed') {
			if (attempts <= 0) {
				updateAttempts = { attempts: 1 }
			}
		}

		updateTracker({ ...tracker, [name]: checked, ...updateAttempts })
	}
	async function updateTracker(updatedTrackerValues) {
		const { attempts, distressSignalUsed, completed } = updatedTrackerValues
		try {
			const res = await editTracker({ attempts, distressSignalUsed, completed }, _id)
			const { missionTracker } = await res.json()
			if (missionTracker) {
				updateMissionTracker(missionTracker)
				setError('')
			} else {
				setError("Something went wrong, Can't save your progress right now!")
			}
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
					value={attempts}
					isDisabled={completed}>
					<NumberInputField />
					<NumberInputStepper>
						<NumberIncrementStepper />
						{attempts > 0 && <NumberDecrementStepper />}
					</NumberInputStepper>
				</NumberInput>
				{/* //! */}
				<Center>
					<Circle bgColor={'black'} border={'1px'} borderColor={'orange'} size={10}>
						<MdOutlineSatelliteAlt
							color='orange'
							size={20}
							style={{ transform: 'rotate(-90deg)' }}
						/>
					</Circle>
				</Center>

				{/* //! */}
				{/* Checkbox for distressSignalUsed */}
				<FormControl display='flex' alignItems='center'>
					<FormLabel htmlFor='distressSignalUsed' mb='0'>
						Distress Signal Used
					</FormLabel>
					<Checkbox
						id='distressSignalUsed'
						name='distressSignalUsed'
						isChecked={distressSignalUsed}
						onChange={handleCheckboxChange}
						isDisabled={completed}
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
						isChecked={completed}
						onChange={handleCheckboxChange}
					/>
				</FormControl>
			</FormControl>

			{error && <Text color={'red.500'}>{error}</Text>}
		</Stack>
	)
}

export default MissionTrackerForm
