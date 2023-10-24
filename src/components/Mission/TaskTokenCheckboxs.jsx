import { Checkbox } from '@chakra-ui/react'
import React from 'react'
import TaskToken from './TaskToken'

function TaskTokenCheckboxs({ taskTokens, handleAddAndRemoveTaskToken }) {
	const TOKEN_VALUES = ['1', '2', '3', '4', '5', '>', '>>', '>>>', '>>>>', 'Ω']
	function tokenIsInTaskTokens(value) {
		return taskTokens.some((token) => {
			return token.value === value
		})
	}
	return (
		<>
			{TOKEN_VALUES.map((value) => (
				<Checkbox
					key={value}
					value={value}
					isChecked={tokenIsInTaskTokens(value)}
					onChange={(e) => handleAddAndRemoveTaskToken(value, e.target.checked)}>
					<TaskToken value={value} />
				</Checkbox>
			))}
		</>
	)
}

export default TaskTokenCheckboxs
