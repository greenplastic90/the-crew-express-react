import { Radio } from '@chakra-ui/react'
import React from 'react'
import TaskToken from './TaskToken'

function TaskTokenRadios({ token }) {
	const taskTokens = ['1', '2', '3', '4', '5', '>', '>>', '>>>', '>>>>', 'Ω']
	return (
		<>
			{taskTokens.map((token) => (
				<Radio key={token}>
					<TaskToken value={token} />
				</Radio>
			))}
		</>
	)
}

export default TaskTokenRadios
