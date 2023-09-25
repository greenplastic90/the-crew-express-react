import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import Crews from '../Crews/Crews'
import NewCrew from '../Crews/NewCrew'
import Crew from '../Crews/Crew'
import UpdateCrew from '../Crews/UpdateCrew'
import Mission from '../Missions/Mission'
import Background from '../../components/App/Background'

function App() {
	const [user, setUser] = useState(getUser())
	const [offset, setOffset] = useState({ x: 0, y: 0 })

	const handleClick = () => {
		const newOffset = offset.x + 500
		setOffset({ x: newOffset, y: newOffset })
	}

	return (
		<Background offset={offset}>
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
		</Background>
	)
}

export default App
