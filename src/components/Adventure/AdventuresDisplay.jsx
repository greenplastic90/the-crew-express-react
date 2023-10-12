import React from 'react'

import AdventureDetails from './AdventureDetails'
import CustomGrid from '../Miscellaneous/CustomGrid'

function AdventuresDisplay({ adventures, deleteAdventure, showOnlyMyAdventures }) {
	return (
		<CustomGrid>
			{adventures.map((adventure) => (
				<AdventureDetails
					key={adventure._id}
					adventure={adventure}
					deleteAdventure={deleteAdventure}
					showPreviewButton={true}
					showOnlyMyAdventures={showOnlyMyAdventures}
				/>
			))}
		</CustomGrid>
	)
}

export default AdventuresDisplay
