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
		<Stack h={'100%'} pt={16} pb={8} px={[4, 8, 16, 32, 64, 256]}>
			{/* {title && (
				<Box ref={headingRef}>
					<Heading variant={'h1'} as='h1' size='3xl' pb={5}>
						{title.toUpperCase()}
					</Heading>
				</Box>
			)} */}

			{children}
		</Stack>
	)
}

export default PageWrapper
