import { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Link } from '@chakra-ui/react'
import PageWrapper from '../../components/Miscellaneous/PageWrapper'
import ElementCard from '../../components/Miscellaneous/ElementCard'

export default function AuthPage({ setUser }) {
	const [showSignUp, setShowSignUp] = useState(false)
	return (
		<PageWrapper title={showSignUp ? 'Sign Up' : 'Login'}>
			<ElementCard>
				{showSignUp ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}
				<Link color={'blue.500'} onClick={() => setShowSignUp(!showSignUp)}>
					{showSignUp ? 'Already signed up?' : 'Need an account?'}
				</Link>
			</ElementCard>
		</PageWrapper>
	)
}
