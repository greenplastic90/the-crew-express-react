import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import { Box } from '@chakra-ui/react'

function App() {
	const [user, setUser] = useState(getUser())

	return (
		<Box display='grid' gridTemplateRows='auto 1fr auto' minHeight='100vh'>
			<NavBar user={user} setUser={setUser} />
			{user ? <Routes>{/* Route components in here */}</Routes> : <AuthPage setUser={setUser} />}
		</Box>
	)
}

export default App
