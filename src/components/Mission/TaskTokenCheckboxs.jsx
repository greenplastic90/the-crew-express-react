import { Checkbox } from '@chakra-ui/react'
import React from 'react'
import TaskToken from './TaskToken'

function TaskTokenCheckboxs({ taskTokens }) {
	const tokenValues = ['1', '2', '3', '4', '5', '>', '>>', '>>>', '>>>>', 'Ω']
	function tokenIsInTaskTokens(value) {
		return taskTokens.some((token) => {
			return token.value === value
		})
	}
	return (
		<>
			{tokenValues.map((value) => (
				<Checkbox key={value} value={value} isChecked={tokenIsInTaskTokens(value)}>
					<TaskToken value={value} />
				</Checkbox>
			))}
		</>
	)
}

export default TaskTokenCheckboxs
