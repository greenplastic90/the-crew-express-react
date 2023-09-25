import { useState } from 'react'
import SignUpForm from '../../components/Auth/SignUpForm'
import LoginForm from '../../components/Auth/LoginForm'
import { Link } from '@chakra-ui/react'
import PageWrapper from '../../components/Miscellaneous/PageWrapper'
import ElementCard from '../../components/Miscellaneous/ElementCard'
import { useBackgroundScroll } from '../../components/Context/BackgroundScrollContext'

export default function AuthPage({ setUser }) {
	const [showSignUp, setShowSignUp] = useState(false)
	const { handleBackgroundScroll } = useBackgroundScroll()

	function handlePageSwitch() {
		setShowSignUp(!showSignUp)
		handleBackgroundScroll(showSignUp)
	}
	return (
		<PageWrapper title={showSignUp ? 'Sign Up' : 'Login'}>
			<ElementCard>
				{showSignUp ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}
				<Link ml={'auto'} color={'blue.500'} onClick={handlePageSwitch}>
					{showSignUp ? 'Already signed up?' : 'Need an account?'}
				</Link>
			</ElementCard>
		</PageWrapper>
	)
}
