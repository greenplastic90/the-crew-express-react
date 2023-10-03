import { Stack } from '@chakra-ui/react'
import React from 'react'

function FormWrapper({ children }) {
	return <Stack spacing={4}>{children}</Stack>
}

export default FormWrapper
