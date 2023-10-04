import { Box, Divider, HStack, Switch } from '@chakra-ui/react'
import React, { forwardRef } from 'react'
import ElementCard from '../Miscellaneous/ElementCard'
import { GiAstronautHelmet, GiExitDoor, GiMovementSensor, GiControlTower } from 'react-icons/gi'
import MenuItem from './MenuItem'
import MenuItemsWrapper from './MenuItemsWrapper'

function DropDownMenu(
	{ user, handleLogOut, navBarHeight, handleAnimateToggle, canAnimateBg, handleNavigation },
	ref
) {
	return (
		<Box
			ref={ref}
			borderRadius={'md'}
			zIndex={20}
			boxShadow={'0 10px 10px 10px rgba(0, 0, 0, 0.1)'}
			position='fixed'
			top={`${navBarHeight - 2}px`} // 1px is the height of one border border
			right={0}>
			<ElementCard>
				{/*//? User Info */}
				<MenuItemsWrapper spacing={4}>
					<MenuItem text={user.username} icon={<GiAstronautHelmet size={30} />} />
					{/* <MenuItem text={user.email} icon={<GiLetterBomb size={30} />} /> */}
				</MenuItemsWrapper>

				<Divider />
				{/*//? Links */}
				<MenuItemsWrapper>
					<MenuItem
						text={'My crews'}
						icon={<GiControlTower size={30} />}
						func={() => handleNavigation('/crews')}
					/>
				</MenuItemsWrapper>
				<Divider />
				{/*//? Options */}
				<MenuItemsWrapper>
					<HStack justify={'space-between'}>
						<MenuItem text={'Background scrolling'} icon={<GiMovementSensor size={30} />} />
						<Switch
							alignSelf={'end'}
							isChecked={canAnimateBg}
							onChange={handleAnimateToggle}
							colorScheme={'brand.greenPine'}
						/>
					</HStack>
					<MenuItem text={'Sign out'} icon={<GiExitDoor size={30} />} func={handleLogOut} />
				</MenuItemsWrapper>
			</ElementCard>
		</Box>
	)
}

export default forwardRef(DropDownMenu)
