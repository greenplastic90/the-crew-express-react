import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import { Box, Container } from '@chakra-ui/react'
import Crews from '../Crews/Crews'
import NewCrew from '../Crews/NewCrew'
import Crew from '../Crews/Crew'

function App() {
	const [user, setUser] = useState(getUser())

	return (
		<Box display='grid' gridTemplateRows='auto 1fr auto' minHeight='100vh'>
			<NavBar user={user} setUser={setUser} />
			<Container>
				{user ? (
					<Routes>
						<Route path='/crews' element={<Crews user={user} />} />
						<Route path='/crews/new' element={<NewCrew />} />
						<Route path='/crew/:crewId' element={<Crew />} />
					</Routes>
				) : (
					<AuthPage setUser={setUser} />
				)}
			</Container>
		</Box>
	)
}

export default App
