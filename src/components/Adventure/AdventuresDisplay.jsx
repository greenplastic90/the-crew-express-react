import React, { useEffect, useState } from 'react'
import { getAllAdventures } from '../../utilities/adventure-api'
import { Stack, Text } from '@chakra-ui/react'
import CustomSpinner from '../Miscellaneous/CustomSpinner'
import AdventureDetails from './AdventureDetails'
import CustomGrid from '../Miscellaneous/CustomGrid'

function AdventuresDisplay({ adventures, deleteAdventure }) {
	return (
		<CustomGrid>
			{adventures.map((adventure) => (
				<AdventureDetails
					key={adventure._id}
					adventure={adventure}
					deleteAdventure={deleteAdventure}
					showPreviewButton={true}
				/>
			))}
		</CustomGrid>
	)
}

export default AdventuresDisplay
