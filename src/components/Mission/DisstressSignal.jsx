import { Center, Circle } from '@chakra-ui/react'
import { MdOutlineSatelliteAlt } from 'react-icons/md'
import React from 'react'

function DisstressSignal({ distressSignalUsed, handleDisstressSignal = () => {} }) {
	return (
		<Center cursor={'pointer'} onClick={handleDisstressSignal}>
			<Circle
				bgColor={distressSignalUsed ? 'black' : 'white'}
				border={'1px'}
				borderColor={distressSignalUsed ? 'orange' : 'black'}
				size={10}>
				<MdOutlineSatelliteAlt
					color={distressSignalUsed ? 'orange' : 'black'}
					size={20}
					style={{ transform: 'rotate(-90deg)' }}
				/>
			</Circle>
		</Center>
	)
}

export default DisstressSignal
