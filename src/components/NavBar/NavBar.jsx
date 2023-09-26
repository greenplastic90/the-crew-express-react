import { Link } from 'react-router-dom'
import { logOut } from '../../utilities/users-service'
import { HStack, Text } from '@chakra-ui/react'

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
			bgColor={'brand.beige'}
			borderBottom={'4px'}
			borderColor={'brand.beigeLight'}>
			<Text>The Crew Logbook</Text>
			{user ? (
				<HStack>
					<Link to='/crews'>Crews</Link>
					<Link to='' onClick={handleLogOut}>
						Log Out
					</Link>
				</HStack>
			) : (
				<Link to=''>Login</Link>
			)}
		</HStack>
	)
}
