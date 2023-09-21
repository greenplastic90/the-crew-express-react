import { Box, Heading, Stack } from '@chakra-ui/react'
import React, { useRef, useEffect, useState } from 'react'

function PageWrapper({ title, children }) {
	const headingRef = useRef(null)
	const [headingHeight, setHeadingHeight] = useState(0)

	const updateHeadingHeight = () => {
		console.log(headingRef.current.offsetHeight)
		if (headingRef.current) {
			setHeadingHeight(headingRef.current.offsetHeight)
		}
	}

	useEffect(() => {
		updateHeadingHeight()

		window.addEventListener('resize', updateHeadingHeight)

		return () => {
			window.removeEventListener('resize', updateHeadingHeight)
		}
	}, [title])

	return (
		<Stack py={8} px={[null, 8, 16, 32, 64, 256]}>
			<Heading ref={headingRef} position={'fixed'} variant={'h1'} as='h1' size='3xl' pb={5}>
				{title.toUpperCase()}
			</Heading>
			<Box pt={headingHeight + 20}>{children}</Box>
		</Stack>
	)
}

export default PageWrapper
