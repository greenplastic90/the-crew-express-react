import { Stack } from '@chakra-ui/react'
import React from 'react'

function MenuItemsWrapper({ children }) {
	return <Stack spacing={4}>{children}</Stack>
}

export default MenuItemsWrapper
