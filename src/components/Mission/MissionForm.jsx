import React, { useState } from 'react'
import ElementCard from '../Miscellaneous/ElementCard'
import FormWrapper from '../Miscellaneous/FormWrapper'
import {
	Checkbox,
	FormControl,
	FormLabel,
	NumberInput,
	NumberInputField,
	Textarea,
} from '@chakra-ui/react'

import TaskTokenCheckboxs from './TaskTokenCheckboxs'

function MissionForm({ missionData }) {
	const [mission, setMission] = useState(missionData)

	return (
		<ElementCard>
			<FormWrapper>
				<FormControl>
					<FormLabel>Mission Number</FormLabel>
					<NumberInput value={mission.number}>
						<NumberInputField />
					</NumberInput>
				</FormControl>
				<FormControl>
					<FormLabel>Number of Tasks</FormLabel>
					<NumberInput value={mission.tasks ? mission.tasks : 0}>
						<NumberInputField />
					</NumberInput>
				</FormControl>
				<FormControl>
					<FormLabel>Task Tokens</FormLabel>
					<TaskTokenCheckboxs taskTokens={mission.taskTokens} />
				</FormControl>
				<FormControl>
					<FormLabel>Mission Description</FormLabel>
					<Textarea value={mission.description} />
				</FormControl>
				<FormControl>
					<Checkbox isChecked={mission.fivePlayerRule} value={mission.fivePlayerRule}>
						Five Player Rule
					</Checkbox>
				</FormControl>
			</FormWrapper>
		</ElementCard>
	)
}

export default MissionForm
