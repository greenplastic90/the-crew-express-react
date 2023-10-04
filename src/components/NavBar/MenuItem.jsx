import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'

function MenuItem({ icon, text, func }) {
	return (
		<HStack cursor={func ? 'pointer' : ''} onClick={func} spacing={4}>
			<Box>{icon}</Box>
			<Text alignSelf={'end'}>{text}</Text>
		</HStack>
	)
}

export default MenuItem
