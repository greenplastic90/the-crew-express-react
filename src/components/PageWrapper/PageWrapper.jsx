import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'

function PageWrapper({ title, children }) {
	return (
		<Stack pt={8}>
			<Heading as='h1' size='3xl' pb={5} letterSpacing={3}>
				{title.toUpperCase()}
			</Heading>
			{children}
		</Stack>
	)
}

export default PageWrapper
