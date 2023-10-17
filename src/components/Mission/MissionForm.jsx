import React, { useState } from 'react'
import ElementCard from '../Miscellaneous/ElementCard'
import FormWrapper from '../Miscellaneous/FormWrapper'
import {
	Checkbox,
	FormControl,
	FormLabel,
	NumberInput,
	NumberInputField,
	Radio,
	Textarea,
} from '@chakra-ui/react'
import TaskToken from './TaskToken'
import TaskTokenRadio from './TaskTokenRadios'
import TaskTokenRadios from './TaskTokenRadios'

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

					<TaskTokenRadios />
				</FormControl>
				<FormControl>
					<FormLabel>Mission Description</FormLabel>
					<Textarea />
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
