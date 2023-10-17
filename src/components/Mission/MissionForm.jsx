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

function MissionForm({ missionData }) {
	const [mission, setMission] = useState(missionData)
	const taskTokens = ['1', '2', '3', '4', '5', '>', '>>', '>>>', '>>>>', 'Ω']
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
					{taskTokens.map((token) => (
						<Radio key={token}>
							<TaskToken value={token} />
						</Radio>
					))}
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
