import { Box } from '@chakra-ui/react'
import React from 'react'
import HelmetIcon from '../Crew/HelmetIcon'

function DropdownMenuIcon({ setOpenDropdown, ref }) {
	return (
		<Box
			ref={ref}
			cursor={'pointer'}
			onClick={() => setOpenDropdown((openDropdown) => !openDropdown)}>
			<HelmetIcon />
		</Box>
	)
}

export default DropdownMenuIcon
