import { Heading, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Crew from '../../components/Crew/Crew'
import { getallCrews } from '../../utilities/crew-api'

function Crews({ user }) {
	const [crews, setCrews] = useState([])
	const [error, setError] = useState('')

	useEffect(() => {
		async function getUserCrews() {
			try {
				const res = await getallCrews()
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
		}
		getUserCrews()
	}, [])
	return (
		<Stack>
			<Heading as={'h1'} size={'4xl'}>
				{`${user.username}'s Crew List`}
			</Heading>

			{crews.map((crew) => (
				<Crew key={crew._id} crew={crew} />
			))}

			{error && <Text color={'red.500'}>{error}</Text>}
		</Stack>
	)
}

export default Crews
