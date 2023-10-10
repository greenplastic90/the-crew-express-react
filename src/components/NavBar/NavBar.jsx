import { useNavigate } from 'react-router-dom'
import { logOut } from '../../utilities/users-service'
import { Box, HStack, Text } from '@chakra-ui/react'
import DropdownMenuIcon from './DropdownMenuIcon'
import { useEffect, useRef, useState } from 'react'

import DropdownMenu from './DropdownMenu'
import { useNavigation } from '../Context/NavigationContext'

export default function NavBar({ user, setUser }) {
	const [openDropdown, setOpenDropdown] = useState(false)
	const [navBarHeight, setNavBarHeight] = useState(0)
	const dropdownRef = useRef(null)
	const navBarRef = useRef()
	const dropdownMenuRef = useRef(null)

	const navigate = useNavigate()
	const { handleAnimateToggle, canAnimateBg } = useNavigation()

	const handleClickOutside = (event) => {
		if (
			dropdownMenuRef.current &&
			!dropdownMenuRef.current.contains(event.target) &&
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target)
		) {
			setOpenDropdown(false)
		}
	}

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

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
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
					bg={'brand.grayDark'}
					borderBottom={'2px'}
					borderColor={'brand.gray'}>
					<Box position={'relative'}>
						<Text variant={'logo'}>LOGBOOK</Text>
						<Text variant={'logo2'}>LOGBOOK</Text>
					</Box>
					{user && (
						<HStack>
							<DropdownMenuIcon setOpenDropdown={setOpenDropdown} ref={dropdownRef} />
						</HStack>
					)}
				</HStack>
				{user && openDropdown && (
					<DropdownMenu
						user={user}
						handleLogOut={handleLogOut}
						navBarHeight={navBarHeight}
						ref={dropdownMenuRef}
						handleAnimateToggle={handleAnimateToggle}
						canAnimateBg={canAnimateBg}
						handleNavigation={handleNavigation}
					/>
				)}
			</Box>
		</Box>
	)
}
