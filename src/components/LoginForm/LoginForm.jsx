import { useState } from 'react'
import { getUser, login } from '../../utilities/users-service'

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
		<div>
			<div className='form-container'>
				<form autoComplete='off' onSubmit={handleSubmit}>
					<label>Email</label>
					<input
						type='text'
						name='email'
						value={credentials.email}
						onChange={handleChange}
						required
					/>
					<label>Password</label>
					<input
						type='password'
						name='password'
						value={credentials.password}
						onChange={handleChange}
						required
					/>
					<button type='submit'>LOG IN</button>
				</form>
			</div>
			<p className='error-message'>&nbsp;{errors}</p>
		</div>
	)
}
