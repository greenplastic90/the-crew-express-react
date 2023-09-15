import { Stack } from '@chakra-ui/react'
import React from 'react'

function FormWrapper({ children }) {
	return <Stack px={10}>{children}</Stack>
}

export default FormWrapper
