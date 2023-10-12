import { Grid } from '@chakra-ui/react'
import React from 'react'

function CustomGrid({ children }) {
	return (
		<Grid templateColumns={['repeat(1, 1fr)', null, null, null, null, 'repeat(2, 1fr)']} gap={2}>
			{children}
		</Grid>
	)
}

export default CustomGrid
