import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

function MenuItem({ icon, text, func }) {
	return (
		<HStack cursor={func ? 'pointer' : ''} onClick={func}>
			{icon}
			<Text fontWeight={'bold'}>{text}</Text>
		</HStack>
	)
}

export default MenuItem
