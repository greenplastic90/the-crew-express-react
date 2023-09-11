import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'

function PageWrapper({ title, children }) {
	return (
		<Stack spacing={4} pt={10}>
			<Heading as='h1' size='3xl'>
				{title}
			</Heading>
			{children}
		</Stack>
	)
}

export default PageWrapper
