import { Button, Heading, Spinner, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CrewDetails from '../../components/Crew/CrewDetails'
import { getAllCrews } from '../../utilities/crew-api'
import { useNavigate } from 'react-router-dom'
import PageWrapper from '../../components/PageWrapper/PageWrapper'

function Crews({ user }) {
	const [crews, setCrews] = useState([])
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(true)

	const navigate = useNavigate()

	useEffect(() => {
		async function getUserCrews() {
			try {
				const res = await getAllCrews()
				const { crews } = await res.json()

				if (crews) {
					setCrews(crews)
					setError('')
				} else {
					setError('Something went wrong! Please try again later.')
				}
			} catch (error) {
				console.log(error)
			}
			setIsLoading(false)
		}
		getUserCrews()
	}, [])

	return (
		<PageWrapper title={`${user.username}'s Crews`.toUpperCase()}>
			{/* <Heading variant='h1' size={'2xl'}>
				{`${user.username}'s Crews`.toUpperCase()}
			</Heading> */}
			<Button onClick={() => navigate('/crew/new')}>+ New Crew</Button>

			{!isLoading ? (
				crews.map((crew) => <CrewDetails key={crew._id} crew={crew} setCrews={setCrews} />)
			) : (
				<Spinner />
			)}

			{error && <Text color={'red.500'}>{error}</Text>}
		</PageWrapper>
	)
}

export default Crews
