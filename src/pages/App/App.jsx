import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import { Box } from '@chakra-ui/react'
import Crews from '../Crews/Crews'
import NewCrew from '../Crews/NewCrew'
import Crew from '../Crews/Crew'
import UpdateCrew from '../Crews/UpdateCrew'
import Mission from '../Missions/Mission'
import spaceBg from '../../images/space.jpg'

function App() {
	const [user, setUser] = useState(getUser())

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.pageYOffset
			document.documentElement.style.setProperty('--offset', `${offset * 2}px`)
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<Box
			bg={'brand.beigeMedium'}
			style={{
				backgroundImage: `url(${spaceBg})`,
				backgroundPosition: 'var(--offset)',
			}}
			display='grid'
			gridTemplateRows='auto 1fr auto'
			minHeight='100vh'>
			<NavBar user={user} setUser={setUser} />

			{user ? (
				<Routes>
					<Route path='/' element={<Navigate to='/crews' />} />
					<Route path='/crews' element={<Crews user={user} />} />
					<Route path='/crew/new' element={<NewCrew />} />
					<Route path='/crew/:crewId/edit' element={<UpdateCrew />} />
					<Route path='/crew/:crewId' element={<Crew />} />
					<Route path='/mission/:missionTrackerId' element={<Mission />} />
				</Routes>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</Box>
	)
}

export default App
