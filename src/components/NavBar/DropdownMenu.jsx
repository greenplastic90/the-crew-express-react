import { Box, Divider, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ElementCard from '../Miscellaneous/ElementCard'
import { Link } from 'react-router-dom'
import { AiOutlineLogout, AiOutlineUser, AiOutlineMail } from 'react-icons/ai'
import { GiAstronautHelmet, GiLetterBomb, GiExitDoor } from 'react-icons/gi'
import MenuItem from './MenuItem'

function DropDownMenu({ user, handleLogOut, navBarHeight, dropdownRef }) {
	return (
		<Box
			zIndex={20}
			boxShadow={'0 10px 10px 10px rgba(0, 0, 0, 0.2)'}
			position='fixed'
			top={`${navBarHeight - 4}px`} // 2px is the height of one border border
			right={`${dropdownRef.current?.offsetLeft - dropdownRef.current?.offsetWidth || 0}px`}>
			<ElementCard>
				<Stack>
					<MenuItem text={user.username} icon={<GiAstronautHelmet size={30} />} />
					<MenuItem text={user.email} icon={<GiLetterBomb size={30} />} />
				</Stack>

				<Divider />
				<Stack>
					<MenuItem text={'Sign out'} icon={<GiExitDoor size={30} />} func={handleLogOut} />
				</Stack>
			</ElementCard>
		</Box>
	)
}

export default DropDownMenu
