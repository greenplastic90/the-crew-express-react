import { Box } from '@chakra-ui/react'
import React from 'react'
import HelmetIcon from '../Crew/HelmetIcon'

function DropdownMenuIcon({ setOpenDropdown, dropdownRef }) {
	return (
		<Box
			ref={dropdownRef}
			cursor={'pointer'}
			onClick={() => setOpenDropdown((openDropdown) => !openDropdown)}>
			<HelmetIcon />
		</Box>
	)
}

export default DropdownMenuIcon
