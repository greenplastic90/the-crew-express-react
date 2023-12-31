import { Flex, Popover, PopoverTrigger } from '@chakra-ui/react'
import React from 'react'
import CustomPopover from '../Miscellaneous/CustomPopover'
import TaskToken from './TaskToken'

function TaskTokens({ tokens }) {
	const tokenCount = tokens.length

	const renderLayout = () => {
		if (tokenCount <= 3) {
			return <Flex>{tokens.map((t) => renderToken(t))}</Flex>
		}

		// if (tokenCount === 3) {
		// 	return (
		// 		<Flex flexDirection='column' alignItems='center'>
		// 			<Flex>{tokens.slice(0, 2).map((t) => renderToken(t))}</Flex>
		// 			{renderToken(tokens[2])}
		// 		</Flex>
		// 	)
		// }

		if (tokenCount === 4) {
			return (
				<Flex flexDirection='column'>
					<Flex>{tokens.slice(0, 2).map((t) => renderToken(t))}</Flex>
					<Flex>{tokens.slice(2, 4).map((t) => renderToken(t))}</Flex>
				</Flex>
			)
		}

		if (tokenCount === 5) {
			return (
				<Flex flexDirection='column' alignItems='center'>
					<Flex>{tokens.slice(0, 3).map((t) => renderToken(t))}</Flex>
					<Flex>{tokens.slice(3, 5).map((t) => renderToken(t))}</Flex>
				</Flex>
			)
		}
	}

	const renderToken = (t) => <TaskToken key={t._id} value={t.value} />

	return tokenCount > 0 && <Flex>{renderLayout()}</Flex>
}

export default TaskTokens
