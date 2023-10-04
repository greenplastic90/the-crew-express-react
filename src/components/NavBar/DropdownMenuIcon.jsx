import { Box } from '@chakra-ui/react'
import React, { forwardRef } from 'react'
import HelmetIcon from '../Crew/HelmetIcon'
import { MdMenu } from 'react-icons/md'

function DropdownMenuIcon({ setOpenDropdown }, ref) {
	return (
		<Box
			ref={ref}
			cursor={'pointer'}
			onClick={() => setOpenDropdown((openDropdown) => !openDropdown)}>
			<MdMenu size={25} />
		</Box>
	)
}

export default forwardRef(DropdownMenuIcon)
