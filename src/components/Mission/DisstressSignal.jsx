import React from 'react'
import { Center, Circle, VStack } from '@chakra-ui/react'
import { MdOutlineSatelliteAlt } from 'react-icons/md'
import { motion } from 'framer-motion'

const MotionVStack = motion(VStack)

function DisstressSignal({ distressSignalUsed, handleDisstressSignal, completed }) {
	const animations = {
		animate: distressSignalUsed
			? {
					scale: [1, 1.2, 1, 1, 1.2, 1],
			  }
			: {
					scale: 1,
			  },
		transition: {
			repeat: distressSignalUsed ? Infinity : 0,
			duration: 3,
		},
	}

	return (
		<Center cursor={completed ? '' : 'pointer'} onClick={handleDisstressSignal}>
			<Circle
				bgColor={completed ? 'brand.silver.500' : 'white'}
				border={distressSignalUsed ? '4px' : '2px'}
				borderColor={distressSignalUsed ? 'brand.brown.400' : 'black'}
				size={14}>
				<MotionVStack
					{...animations}
					spacing={0}
					color={distressSignalUsed ? 'brand.brown.400' : 'black'}>
					<MdOutlineSatelliteAlt
						size={distressSignalUsed ? 20 : 25}
						style={{ transform: 'rotate(-90deg)' }}
					/>
				</MotionVStack>
			</Circle>
		</Center>
	)
}

export default DisstressSignal
