import { PopoverArrow, PopoverCloseButton, PopoverContent, Text } from '@chakra-ui/react'
import React from 'react'
import ElementCard from './ElementCard'

function CustomPopover({ body }) {
	return (
		<PopoverContent>
			<PopoverArrow bg={'brand.greyDark'} />
			<PopoverCloseButton mt={1} />
			<ElementCard>
				<Text>
					Mission number. The golden border serves as a reminder of the additional rule in the game
					when playing with five players, begining with mission 25
				</Text>
			</ElementCard>
		</PopoverContent>
	)
}

export default CustomPopover
