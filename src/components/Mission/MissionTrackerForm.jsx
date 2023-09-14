import React, { useState } from 'react'
import { Stack, HStack, Text, Button, Box } from '@chakra-ui/react'
import { editTracker } from '../../utilities/mission-api'
import DisstressSignal from './DisstressSignal'
import { useNavigate } from 'react-router-dom'

function MissionTrackerForm({ tracker, updateMissionTracker }) {
	const [error, setError] = useState('')
	const { _id, attempts, completed, distressSignalUsed } = tracker

	const navigate = useNavigate()

	const handleDisstressSignal = () => {
		// When distress singnal is used, increate attemps by 1!
		if (!distressSignalUsed && !completed)
			updateTracker({
				...tracker,
				distressSignalUsed: true,
				attempts: attempts + 1,
			})
	}

	function incrementAttempt() {
		updateTracker({ ...tracker, attempts: attempts + 1 })
	}

	function handleMissionComplete() {
		updateTracker({ ...tracker, completed: true })
	}

	async function updateTracker(updatedTrackerValues) {
		const { attempts, distressSignalUsed, completed } = updatedTrackerValues
		try {
			const res = await editTracker({ attempts, distressSignalUsed, completed }, _id)
			if (res.status === 404) {
				navigate('/')
				return
			}
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
		<Stack>
			<HStack spacing={5}>
				{!completed && (
					<Box ml={attempts > 0 ? '' : 'auto'}>
						<Button onClick={incrementAttempt}>
							{attempts <= 0 ? 'Start Mission' : 'Add Attempt'}
						</Button>
					</Box>
				)}
				{attempts > 0 && !completed && (
					<DisstressSignal
						distressSignalUsed={distressSignalUsed}
						handleDisstressSignal={handleDisstressSignal}
						large={true}
					/>
				)}
			</HStack>
			{attempts > 0 && !completed && (
				<Button onClick={handleMissionComplete}>Mission Accomplished</Button>
			)}
			{error && <Text color={'red.500'}>{error}</Text>}
		</Stack>
	)
}

export default MissionTrackerForm
