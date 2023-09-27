import { Link } from 'react-router-dom'
import { logOut } from '../../utilities/users-service'
import { Box, HStack, Text } from '@chakra-ui/react'
import DropdownMenu from './DropdownMenu'

export default function NavBar({ user, setUser }) {
	function handleLogOut() {
		logOut()
		setUser(null)
	}

	return (
		<HStack
			zIndex={10}
			pos={'fixed'}
			minW={'100%'}
			minH={12}
			justify={'space-between'}
			px={4}
			bgColor={'brand.beige'}
			borderBottom={'4px'}
			borderColor={'brand.beigeLight'}>
			<Box position={'relative'}>
				<Text variant={'logo'}>LOGBOOK</Text>
				<Text variant={'logo2'}>LOGBOOK</Text>
			</Box>
			{user ? (
				<HStack>
					<Link to='/crews'>Crews</Link>
					<Link to='' onClick={handleLogOut}>
						Log Out
					</Link>
					<DropdownMenu />
				</HStack>
			) : (
				<Link to=''>Login</Link>
			)}
		</HStack>
	)
}
