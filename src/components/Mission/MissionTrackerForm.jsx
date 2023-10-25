import React, { useState } from 'react'
import { VStack, HStack, Text, Button, Stack } from '@chakra-ui/react'
import { editTracker } from '../../utilities/mission-tracker-api'
import DisstressSignal from './DisstressSignal'
import { useNavigate } from 'react-router-dom'
import Attempts from './Attempts'

function MissionTrackerForm({ tracker, updateMissionTracker }) {
	const [error, setError] = useState('')
	const { _id, attempts, completed, distressSignalUsed } = tracker

	const navigate = useNavigate()

	const handleDisstressSignal = () => {
		// When distress singnal is used, increate attemps by 1!
		if ((distressSignalUsed && attempts <= 0) || completed) return
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
		updateTracker({ ...tracker, completed: !completed })
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
			<HStack spacing={5} w={'100%'} justify={'space-between'}>
				<HStack>
					<HStack>
						<Attempts attempts={attempts} />
						<VStack>
							<Button variant='attempts' onClick={incrementAttempt} isDisabled={completed}>
								+
							</Button>
							<Button
								variant='attempts'
								onClick={decrementAttempt}
								isDisabled={attempts <= 0 || (distressSignalUsed && attempts === 1) || completed}>
								-
							</Button>
						</VStack>
					</HStack>

					<DisstressSignal
						distressSignalUsed={distressSignalUsed}
						handleDisstressSignal={handleDisstressSignal}
						completed={completed}
						attempts={attempts}
					/>
				</HStack>

				{attempts > 0 && (
					<Button onClick={handleMissionComplete} variant={completed ? 'default' : 'confirm'}>
						{completed ? 'Update' : 'End'}
					</Button>
				)}
			</HStack>

			{error && <Text color={'red.500'}>{error}</Text>}
		</Stack>
	)
}

export default MissionTrackerForm
