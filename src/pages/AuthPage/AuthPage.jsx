import { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Link, Container, Heading } from '@chakra-ui/react'

export default function AuthPage({ setUser }) {
	const [showSignUp, setShowSignUp] = useState(false)
	return (
		<Container bgColor={'blue.50'}>
			<Heading>{showSignUp ? 'Sign Up' : 'Login'}</Heading>
			{showSignUp ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}

			<Link color={'blue.500'} onClick={() => setShowSignUp(!showSignUp)}>
				{showSignUp ? 'Already signed up?' : 'Need an account?'}
			</Link>
		</Container>
	)
}
