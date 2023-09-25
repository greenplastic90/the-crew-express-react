import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import { Box, Button } from '@chakra-ui/react'
import Crews from '../Crews/Crews'
import NewCrew from '../Crews/NewCrew'
import Crew from '../Crews/Crew'
import UpdateCrew from '../Crews/UpdateCrew'
import Mission from '../Missions/Mission'
import spaceBg from '../../images/space.jpg'

function App() {
	const [user, setUser] = useState(getUser())
	const [offset, setOffset] = useState({ x: 0, y: 0 })

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const newOffset = window.pageYOffset + 100
	// 		setOffset({ x: newOffset, y: newOffset })
	// 	}

	// 	window.addEventListener('scroll', handleScroll)

	// 	return () => window.removeEventListener('scroll', handleScroll)
	// }, [])
	// const handleScroll = () => {
	// 	const newOffset = window.pageYOffset * 2
	// 	setOffset({ x: newOffset, y: newOffset })
	// }

	const handleClick = () => {
		const newOffset = offset.x + 500
		setOffset({ x: newOffset, y: newOffset })
	}

	return (
		<Box
			position='relative'
			display='grid'
			gridTemplateRows='auto 1fr auto'
			minHeight='100vh'
			_before={{
				content: '""',
				position: 'absolute',
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
				backgroundImage: `url(${spaceBg})`,
				backgroundPosition: `${offset.x}px ${offset.y}px`,
				filter: 'blur(2px)',
				zIndex: -1,
				transition: 'background-position 4s ease-in-out',
			}}>
			<NavBar user={user} setUser={setUser} />
			<Button onClick={handleClick}>Change Offset</Button>
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
