import { useState } from 'react'
import { getUser, login } from '../../utilities/users-service'
import {
	Button,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
	InputGroup,
} from '@chakra-ui/react'

export default function LoginForm({ setUser }) {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	})
	const [errors, setErrors] = useState('')

	function handleChange(evt) {
		setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
		setErrors('')
	}

	async function handleSubmit(evt) {
		evt.preventDefault()
		try {
			const res = await login(credentials)
			const resJSON = await res.json()
			if (res.ok) {
				localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, resJSON.token)
				setUser(getUser())
			} else {
				setErrors('Login Failed - Try Again')
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<FormControl isInvalid={errors}>
				<InputGroup>
					<FormLabel>Email</FormLabel>
					<Input
						type='email'
						name='email'
						value={credentials.email}
						onChange={handleChange}
						required
					/>
				</InputGroup>
				<InputGroup>
					<FormLabel>Password</FormLabel>
					<Input
						type='password'
						name='password'
						value={credentials.password}
						onChange={handleChange}
						required
					/>
				</InputGroup>
				<FormErrorMessage>{errors}</FormErrorMessage>
				<Button type='submit'>LOG IN</Button>
			</FormControl>
		</form>
	)
}
