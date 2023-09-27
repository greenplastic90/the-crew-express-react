import { Link } from 'react-router-dom'
import { logOut } from '../../utilities/users-service'
import { Box, HStack, Text } from '@chakra-ui/react'
import DropdownMenu from './DropdownMenu'
import { useEffect, useRef, useState } from 'react'
import ElementCard from '../Miscellaneous/ElementCard'

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

	useEffect(() => {
		// Initial update of navBarHeight
		updateNavBarHeight()

		// Add resize event listener
		window.addEventListener('resize', updateNavBarHeight)

		// Cleanup function to remove event listener
		return () => {
			window.removeEventListener('resize', updateNavBarHeight)
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
						<Link to='/crews'>Crews</Link>
						<Link to='' onClick={handleLogOut}>
							Log Out
						</Link>
						<DropdownMenu setOpenDropdown={setOpenDropdown} ref={dropdownRef} />
					</HStack>
				) : (
					<Link to=''>Login</Link>
				)}
			</HStack>
			{openDropdown && (
				<Box
					position='fixed'
					top={`${navBarHeight - 4}px`} // 2px is the height of one border border
					right={`${dropdownRef.current?.offsetLeft - dropdownRef.current?.offsetWidth || 0}px`}>
					<ElementCard>
						<Text>hi</Text>
					</ElementCard>
				</Box>
			)}
		</Box>
	)
}
