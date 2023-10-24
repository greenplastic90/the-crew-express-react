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

function MissionForm({ mission, onInputChange, onTasksChange, onTokenChange }) {
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
					<Textarea
						onChange={(evt) => onInputChange(mission._id, evt)}
						name='description'
						value={mission.description}
					/>
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
						<NumberInput
							onChange={(number) => onTasksChange(mission._id, number)}
							value={mission.tasks ? mission.tasks : 0}>
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
					<TaskTokenCheckboxs mission={mission} onTokenChange={onTokenChange} />
				</FormControl>
			</FormWrapper>
		</ElementCard>
	)
}

export default MissionForm
