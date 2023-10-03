import { useState } from 'react'
import SignUpForm from '../../components/Auth/SignUpForm'
import LoginForm from '../../components/Auth/LoginForm'
import { Link } from '@chakra-ui/react'
import ElementCard from '../../components/Miscellaneous/ElementCard'
import { useBackgroundScroll } from '../../components/Context/BackgroundScrollContext'

export default function AuthPage({ setUser }) {
	const [showSignUp, setShowSignUp] = useState(false)
	const { handleBackgroundScroll } = useBackgroundScroll()

	async function handlePageSwitch() {
		setShowSignUp(!showSignUp)
		handleBackgroundScroll(showSignUp ? 'west' : 'east')
	}
	return (
		<ElementCard>
			{showSignUp ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}
			<Link ml={'auto'} color={'brand.blueYale.300'} onClick={handlePageSwitch}>
				{showSignUp ? 'Already signed up?' : 'Need an account?'}
			</Link>
		</ElementCard>
	)
}
