import React, { useState } from 'react'
import ElementCard from '../Miscellaneous/ElementCard'
import FormWrapper from '../Miscellaneous/FormWrapper'
import {
	Checkbox,
	FormControl,
	FormLabel,
	HStack,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Textarea,
} from '@chakra-ui/react'

import TaskTokenCheckboxs from './TaskTokenCheckboxs'
import Tasks from '../Mission/Tasks'
import Pentagon from './Pentagon'

function MissionForm({ missionData }) {
	const [mission, setMission] = useState(missionData)

	function handleInputChange(evt) {
		setMission({ ...mission, [evt.target.name]: evt.target.value })
	}
	function handleTasksChange(num) {
		const number = num <= 0 ? 0 : num
		setMission({ ...mission, tasks: number })
	}

	function handleAddAndRemoveTaskToken(value, isChecked) {
		const TOKEN_ORDER = ['1', '2', '3', '4', '5', '>', '>>', '>>>', '>>>>', 'Ω']

		function sortTokensByOrder(a, b) {
			return TOKEN_ORDER.indexOf(a.value) - TOKEN_ORDER.indexOf(b.value)
		}

		let updatedTaskTokens

		if (isChecked) {
			// Add to the array if checked
			updatedTaskTokens = [...mission.taskTokens, { value }]
		} else {
			// Remove from the array if unchecked
			updatedTaskTokens = mission.taskTokens.filter((token) => token.value !== value)
		}

		// Sort taskTokens based on TOKEN_ORDER
		updatedTaskTokens.sort(sortTokensByOrder)

		setMission({ ...mission, taskTokens: updatedTaskTokens })
	}

	return (
		<ElementCard>
			<FormWrapper>
				<HStack spacing={8}>
					<Pentagon number={mission.number} />
					<FormControl>
						<Checkbox isChecked={mission.fivePlayerRule} value={mission.fivePlayerRule}>
							Five Player Rule
						</Checkbox>
					</FormControl>
				</HStack>
				<FormControl>
					<FormLabel>Mission Description</FormLabel>
					<Textarea onChange={handleInputChange} name='description' value={mission.description} />
				</FormControl>
				{/* <FormControl>
					<FormLabel>Mission Number</FormLabel>
					<NumberInput value={mission.number}>
						<NumberInputField />
					</NumberInput>
				</FormControl> */}
				<FormControl>
					<FormLabel>Number of Tasks</FormLabel>
					<HStack>
						<NumberInput onChange={handleTasksChange} value={mission.tasks ? mission.tasks : 0}>
							<NumberInputField />
							<NumberInputStepper>
								<NumberIncrementStepper />
								<NumberDecrementStepper />
							</NumberInputStepper>
						</NumberInput>
						{mission.tasks && <Tasks tasks={mission.tasks} />}
					</HStack>
				</FormControl>
				<FormControl>
					<FormLabel>Task Tokens</FormLabel>
					<TaskTokenCheckboxs
						taskTokens={mission.taskTokens}
						handleAddAndRemoveTaskToken={handleAddAndRemoveTaskToken}
					/>
				</FormControl>
			</FormWrapper>
		</ElementCard>
	)
}

export default MissionForm
