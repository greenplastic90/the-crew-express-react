import { useState } from 'react'
import SignUpForm from '../../components/Auth/SignUpForm'
import LoginForm from '../../components/Auth/LoginForm'
import { Link } from '@chakra-ui/react'
import ElementCard from '../../components/Miscellaneous/ElementCard'
import { useNavigation } from '../../components/Context/NavigationContext'

export default function AuthPage({ setUser }) {
	const [showSignUp, setShowSignUp] = useState(false)
	const { handleNavigation } = useNavigation()

	async function handlePageSwitch() {
		setShowSignUp(!showSignUp)
		handleNavigation('/', showSignUp ? 'west' : 'east')
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
