import { Box, Heading, Stack } from '@chakra-ui/react'
import React, { useRef, useEffect, useState } from 'react'

function PageWrapper({ title, children }) {
	const headingRef = useRef(null)
	const [headingHeight, setHeadingHeight] = useState(0)

	const updateHeadingHeight = () => {
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
			<Box ref={headingRef} position={'fixed'}>
				<Heading variant={'h1'} as='h1' size='3xl' pb={5}>
					{title.toUpperCase()}
				</Heading>
			</Box>

			<Box pt={headingHeight + 20} zIndex={1}>
				{children}
			</Box>
		</Stack>
	)
}

export default PageWrapper
