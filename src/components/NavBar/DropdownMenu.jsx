import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import HelmetIcon from '../Crew/HelmetIcon'

function DropdownMenu({ setOpenDropdown, ref }) {
	return (
		<HStack ref={ref}>
			<Box cursor={'pointer'} onClick={() => setOpenDropdown((openDropdown) => !openDropdown)}>
				<HelmetIcon />
			</Box>
		</HStack>
	)
}

export default DropdownMenu
