import { Container, Heading, Stack } from '@chakra-ui/react'
import React from 'react'

function PageWrapper({ title, children }) {
	return (
		<Stack py={8}>
			<Container>
				<Heading variant={'h1'} as='h1' size='3xl' pb={5}>
					{title.toUpperCase()}
				</Heading>
				{children}
			</Container>
		</Stack>
	)
}

export default PageWrapper
