import { Link } from 'react-router-dom'
import { logOut } from '../../utilities/users-service'
import { Box, HStack, Text } from '@chakra-ui/react'
import DropdownMenuIcon from './DropdownMenuIcon'
import { useEffect, useRef, useState } from 'react'

import DropdownMenu from './DropdownMenu'

export default function NavBar({ user, setUser }) {
	const [openDropdown, setOpenDropdown] = useState(false)
	const [navBarHeight, setNavBarHeight] = useState(0)
	const dropdownRef = useRef()
	const navBarRef = useRef()

	const updateNavBarHeight = () => {
		if (navBarRef.current) {
			setNavBarHeight(navBarRef.current.offsetHeight)
		}
	}

	const handleScroll = () => {
		setOpenDropdown(false)
	}

	useEffect(() => {
		updateNavBarHeight()

		window.addEventListener('resize', updateNavBarHeight)
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('resize', updateNavBarHeight)
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	function handleLogOut() {
		logOut()
		setUser(null)
	}

	return (
		<Box position='relative'>
			<HStack
				ref={navBarRef}
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
						{/* <Link to='/crews'>Crews</Link>
						<Link to='' onClick={handleLogOut}>
							Log Out
						</Link> */}

						<DropdownMenuIcon setOpenDropdown={setOpenDropdown} ref={dropdownRef} />
					</HStack>
				) : (
					<Link to=''>Login</Link>
				)}
			</HStack>
			{openDropdown && (
				<DropdownMenu
					user={user}
					handleLogOut={handleLogOut}
					navBarHeight={navBarHeight}
					dropdownRef={dropdownRef}
				/>
			)}
		</Box>
	)
}
