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
import DisstressSignal from './DisstressSignal'

function MissionTrackerForm({ tracker, updateMissionTracker }) {
	const [error, setError] = useState('')
	const { _id, attempts, completed, distressSignalUsed } = tracker

	const handleDisstressSignal = () => {
		// When distress singnal is used, increate attemps by 1!
		if (!distressSignalUsed)
			updateTracker({
				...tracker,
				distressSignalUsed: true,
				attempts: attempts + 1,
			})
	}

	function incrementAttempt() {
		updateTracker({ ...tracker, attempts: attempts + 1 })
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
			<Button onClick={incrementAttempt}>{attempts <= 0 ? 'Start Mission' : 'Add Attempt'}</Button>

			{attempts > 0 && !completed && (
				<>
					<DisstressSignal
						distressSignalUsed={distressSignalUsed}
						handleDisstressSignal={handleDisstressSignal}
					/>
					<Button>Completed</Button>
				</>
			)}

			{error && <Text color={'red.500'}>{error}</Text>}
		</Stack>
	)
}

export default MissionTrackerForm
