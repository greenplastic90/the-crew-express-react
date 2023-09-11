import { Center, Circle, HStack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { astroColorPicker } from '../../utilities/miscellaneous'
import { GiAstronautHelmet } from 'react-icons/gi'

function Memebers({ members }) {
	return (
		<HStack>
			{members.map((member, i) => (
				<Wrap key={i} bg={'brand.peach'} borderRadius={10}>
					<WrapItem>
						<Center>
							<Circle
								size='40px' // Adjust the size as needed
								bg={astroColorPicker(i)} // replace with your desired background color
								color='white' // Icon color
								display='flex'
								alignItems='center'
								justifyContent='center'>
								<GiAstronautHelmet size={24} />
							</Circle>
							<Text>{member}</Text>
						</Center>
					</WrapItem>
				</Wrap>
			))}
		</HStack>
	)
}

export default Memebers
