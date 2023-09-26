import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import spaceBg from '../../images/space.jpg'
import { useBackgroundScroll } from '../Context/BackgroundScrollContext'

function Background({ children }) {
	const { offset } = useBackgroundScroll()
	return (
		<Stack
			position='relative'
			display='grid'
			minHeight='100vh'
			_before={{
				content: '""',
				position: 'absolute',
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
				backgroundImage: `url(${spaceBg})`,
				backgroundPosition: `${offset.x}px ${offset.y}px`,
				filter: 'blur(2px)',
				zIndex: -1,
				transition: 'background-position 2s ease-in-out',
			}}>
			{children}
		</Stack>
	)
}

export default Background
