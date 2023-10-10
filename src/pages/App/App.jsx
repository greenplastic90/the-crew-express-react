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
import PageWrapper from '../../components/Miscellaneous/PageWrapper'
import Adventures from '../Adventures/Adventures'
import AdventurePreview from '../Adventures/AdventurePreview'

function App() {
	const [user, setUser] = useState(getUser())

	return (
		<Background>
			<NavBar user={user} setUser={setUser} />
			<PageWrapper>
				{user ? (
					<Routes>
						<Route path='/' element={<Navigate to='/adventures' />} />
						<Route path='/adventures' element={<Adventures />} />
						<Route path='/adventures/:adventureId/preview' element={<AdventurePreview />} />
						<Route path='/crews' element={<Crews />} />
						<Route path='/crew/new' element={<NewCrew />} />
						<Route path='/crew/:crewId/edit' element={<UpdateCrew />} />
						<Route path='/crew/:crewId' element={<Crew />} />
						<Route path='/mission/:missionTrackerId' element={<Mission />} />
					</Routes>
				) : (
					<AuthPage setUser={setUser} />
				)}
			</PageWrapper>
		</Background>
	)
}

export default App
