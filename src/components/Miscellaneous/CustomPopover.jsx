import { PopoverArrow, PopoverCloseButton, PopoverContent, Text } from '@chakra-ui/react'
import React from 'react'
import ElementCard from './ElementCard'
import { parseBoldText } from '../../utilities/miscellaneous'

function CustomPopover({ body }) {
	return (
		<PopoverContent boxShadow={'lg'}>
			<PopoverArrow bg={'brand.grayDark'} />
			<PopoverCloseButton mt={1} />
			<ElementCard>
				<Text>{parseBoldText(body)}</Text>
			</ElementCard>
		</PopoverContent>
	)
}

export default CustomPopover
