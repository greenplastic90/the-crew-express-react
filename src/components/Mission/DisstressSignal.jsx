import { Center, Circle } from '@chakra-ui/react'
import { MdOutlineSatelliteAlt } from 'react-icons/md'
import React from 'react'

function DisstressSignal({ distressSignalUsed, handleDisstressSignal = () => {}, large }) {
	const { circle, icon } = large ? { circle: 14, icon: 25 } : { circle: 10, icon: 20 }
	return (
		<Center cursor={'pointer'} onClick={handleDisstressSignal}>
			<Circle
				bgColor={distressSignalUsed ? 'black' : 'white'}
				border={'1px'}
				borderColor={distressSignalUsed ? 'orange' : 'black'}
				size={circle}>
				<MdOutlineSatelliteAlt
					color={distressSignalUsed ? 'orange' : 'black'}
					size={icon}
					style={{ transform: 'rotate(-90deg)' }}
				/>
			</Circle>
		</Center>
	)
}

export default DisstressSignal
