import { Box, Divider, HStack, Switch } from '@chakra-ui/react'
import React, { forwardRef } from 'react'
import ElementCard from '../Miscellaneous/ElementCard'
import { MdPeopleAlt, MdPerson, MdLogout, MdCamera, MdViewList } from 'react-icons/md'
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
					<MenuItem text={user.username} icon={<MdPerson size={30} />} />
					{/* <MenuItem text={user.email} icon={<GiLetterBomb size={30} />} /> */}
				</MenuItemsWrapper>

				<Divider />
				{/*//? Links */}
				<MenuItemsWrapper>
					<MenuItem
						text={'My Crews'}
						icon={<MdPeopleAlt size={30} />}
						func={() => handleNavigation('/crews')}
					/>
					{/* Browse Adventures */}
					<MenuItem
						text={'Adventures'}
						icon={<MdViewList size={30} />}
						func={() => handleNavigation('/adventures')}
					/>
				</MenuItemsWrapper>
				<Divider />
				{/*//? Options */}
				<MenuItemsWrapper>
					<HStack justify={'space-between'}>
						<MenuItem text={'Background Scrolling'} icon={<MdCamera size={30} />} />
						<Switch
							alignSelf={'end'}
							isChecked={canAnimateBg}
							onChange={handleAnimateToggle}
							colorScheme={'brand.greenPine'}
						/>
					</HStack>
					<MenuItem text={'Sign Out'} icon={<MdLogout size={30} />} func={handleLogOut} />
				</MenuItemsWrapper>
			</ElementCard>
		</Box>
	)
}

export default forwardRef(DropDownMenu)
