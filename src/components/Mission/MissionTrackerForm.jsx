import React, { useState } from 'react'
import { VStack, HStack, Text, Button, Box, Stack } from '@chakra-ui/react'
import { editTracker } from '../../utilities/mission-api'
import DisstressSignal from './DisstressSignal'
import { useNavigate } from 'react-router-dom'
import Attempts from './Attempts'

function MissionTrackerForm({ tracker, updateMissionTracker }) {
	const [error, setError] = useState('')
	const { _id, attempts, completed, distressSignalUsed } = tracker

	const navigate = useNavigate()

	const handleDisstressSignal = () => {
		// When distress singnal is used, increate attemps by 1!
		if (distressSignalUsed && attempts <= 0) return
		updateTracker({
			...tracker,
			distressSignalUsed: !distressSignalUsed,
			attempts: distressSignalUsed ? attempts - 1 : attempts + 1,
		})
	}

	function incrementAttempt() {
		if (attempts < 0) {
			updateTracker({ ...tracker, attempts: 1 })
			return
		}
		updateTracker({ ...tracker, attempts: attempts + 1 })
	}
	function decrementAttempt() {
		if (attempts <= 0) {
			updateTracker({ ...tracker, attempts: 0 })
			return
		}
		updateTracker({ ...tracker, attempts: attempts - 1 })
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
		<Stack spacing={4}>
			<HStack spacing={5}>
				<HStack>
					<Attempts attempts={attempts} />
					<VStack>
						<Button variant='attempts' onClick={incrementAttempt}>
							+
						</Button>
						<Button
							variant='attempts'
							onClick={decrementAttempt}
							isDisabled={attempts <= 0 || (distressSignalUsed && attempts === 1)}>
							-
						</Button>
					</VStack>
				</HStack>
				{/* {!completed && (
					<Button variant={'missionStart'} onClick={incrementAttempt}>
						{attempts <= 0 ? 'Mission Start' : 'Add Attempt'}
					</Button>
				)} */}
				<DisstressSignal
					distressSignalUsed={distressSignalUsed}
					handleDisstressSignal={handleDisstressSignal}
					large={true}
					attempts={attempts}
				/>
			</HStack>
			{attempts > 0 && !completed && (
				<Button onClick={handleMissionComplete}>Mission Accomplished</Button>
			)}
			{error && <Text color={'red.500'}>{error}</Text>}
		</Stack>
	)
}

export default MissionTrackerForm
