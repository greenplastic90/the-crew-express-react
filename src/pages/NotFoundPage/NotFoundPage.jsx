import React from 'react'
import ElementCard from '../../components/Miscellaneous/ElementCard'
import { Button, Heading } from '@chakra-ui/react'
import { useNavigation } from '../../components/Context/NavigationContext'

function NotFoundPage() {
	const { handleNavigation } = useNavigation()
	return (
		<ElementCard>
			<Heading>Page Not Found</Heading>
			<Button onClick={() => handleNavigation('/', 'south')}>Back to Home</Button>
		</ElementCard>
	)
}

export default NotFoundPage
