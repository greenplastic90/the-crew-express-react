import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../../utilities/users-service'
import { Box, HStack, Text } from '@chakra-ui/react'
import DropdownMenuIcon from './DropdownMenuIcon'
import { useEffect, useRef, useState } from 'react'

import DropdownMenu from './DropdownMenu'
import { useBackgroundScroll } from '../Context/BackgroundScrollContext'

export default function NavBar({ user, setUser }) {
	const [openDropdown, setOpenDropdown] = useState(false)
	const [navBarHeight, setNavBarHeight] = useState(0)
	const dropdownRef = useRef()
	const navBarRef = useRef()

	const navigate = useNavigate()
	const { handleAnimateToggle, canAnimateBg } = useBackgroundScroll()

	function handleNavigation(link) {
		navigate(link)
		setOpenDropdown(false)
	}
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
		handleNavigation('/')
	}

	return (
		<Box zIndex={20} position={'fixed'}>
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
							<DropdownMenuIcon setOpenDropdown={setOpenDropdown} ref={dropdownRef} />
						</HStack>
					) : (
						<Link to=''>Login</Link>
					)}
				</HStack>
				{user && openDropdown && (
					<DropdownMenu
						user={user}
						handleLogOut={handleLogOut}
						navBarHeight={navBarHeight}
						dropdownRef={dropdownRef}
						handleAnimateToggle={handleAnimateToggle}
						canAnimateBg={canAnimateBg}
						handleNavigation={handleNavigation}
					/>
				)}
			</Box>
		</Box>
	)
}
