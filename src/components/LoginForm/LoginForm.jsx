import { useState } from 'react'
import { getUser, login } from '../../utilities/users-service'
import { Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'

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
		<form autoComplete='off' onSubmit={handleSubmit}>
			<FormControl>
				<FormLabel>Email</FormLabel>
				<Input
					type='email'
					name='email'
					value={credentials.email}
					onChange={handleChange}
					required
				/>
			</FormControl>

			<FormLabel>Password</FormLabel>
			<Input
				type='password'
				name='password'
				value={credentials.password}
				onChange={handleChange}
				required
			/>

			{errors && <Text color={'red'}>{errors}</Text>}
			<Button type='submit'>LOG IN</Button>
		</form>
	)
}
