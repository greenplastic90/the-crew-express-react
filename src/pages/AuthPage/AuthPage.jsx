import { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Link } from '@chakra-ui/react'
import PageWrapper from '../../components/PageWrapper/PageWrapper'

export default function AuthPage({ setUser }) {
	const [showSignUp, setShowSignUp] = useState(false)
	return (
		<PageWrapper title={showSignUp ? 'Sign Up' : 'Login'}>
			{showSignUp ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}
			<Link color={'blue.500'} onClick={() => setShowSignUp(!showSignUp)}>
				{showSignUp ? 'Already signed up?' : 'Need an account?'}
			</Link>
		</PageWrapper>
	)
}
