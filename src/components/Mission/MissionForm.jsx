import React from 'react'
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
import UpdateDeleteButtons from '../Miscellaneous/UpdateDeleteButtons'

function MissionForm({
	mission,
	deleteMission,
	onInputChange,
	onTasksChange,
	onTokenChange,
	onFivePlayerRuleChange,
}) {
	return (
		<ElementCard>
			<FormWrapper>
				<HStack justify={'space-between'}>
					<HStack spacing={8}>
						<Pentagon number={mission.number} />
						<FormControl>
							<Checkbox
								onChange={() => onFivePlayerRuleChange(mission._id)}
								isChecked={mission.fivePlayerRule}
								value={mission.fivePlayerRule}>
								Five Player Rule
							</Checkbox>
						</FormControl>
					</HStack>
					<UpdateDeleteButtons
						name={`Mission ${mission.number}`}
						deleteFunc={() => deleteMission(mission._id)}
						showEdit={false}
						showMissionWarning={true}
					/>
				</HStack>
				<FormControl>
					<FormLabel>Mission Description</FormLabel>
					<Textarea
						onChange={(evt) => onInputChange(mission._id, evt)}
						name='description'
						value={mission.description}
						placeholder='Use [b]text[/b] to make text bold.'
					/>
				</FormControl>
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
