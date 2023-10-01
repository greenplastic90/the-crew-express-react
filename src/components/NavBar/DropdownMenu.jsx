import { Box, Divider, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import ElementCard from '../Miscellaneous/ElementCard'
import { Link } from 'react-router-dom'
import { AiOutlineLogout } from 'react-icons/ai'

function DropDownMenu({ user, handleLogOut, navBarHeight, dropdownRef }) {
	return (
		<Box
			zIndex={20}
			boxShadow={'0 10px 10px 10px rgba(0, 0, 0, 0.2)'}
			position='fixed'
			top={`${navBarHeight - 4}px`} // 2px is the height of one border border
			right={`${dropdownRef.current?.offsetLeft - dropdownRef.current?.offsetWidth || 0}px`}>
			<ElementCard>
				<Text>{user.username}</Text>
				<Text>{user.email}</Text>
				<Divider />
				<Divider />
				<HStack>
					<AiOutlineLogout />
					<Link to='' onClick={handleLogOut}>
						Log Out
					</Link>
				</HStack>
			</ElementCard>
		</Box>
	)
}

export default DropDownMenu
