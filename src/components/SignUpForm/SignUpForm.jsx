import { useState } from 'react'
import { getUser, signUp } from '../../utilities/users-service'

export default function SignUpForm({ setUser }) {
	//! fix confirmed disabled button
	//! fix showing errors
	const [formInputs, setFormInputs] = useState({
		username: '',
		email: '',
		password: '',
		confirm: '',
	})
	const [errors, setErrors] = useState({ email: '', username: '', password: '' })

	const handleSubmit = async (evt) => {
		evt.preventDefault()
		try {
			const formData = { ...formInputs }
			delete formData.confirm
			delete formData.error
			const res = await signUp(formData)
			const resJSON = await res.json()
			if (res.ok) {
				localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, resJSON.token)
				setUser(getUser())
			} else {
				setErrors({ ...errors, ...resJSON.errors })
			}
		} catch (error) {
			console.log({ error })
		}
	}

	const handleChange = (evt) => {
		setFormInputs({
			...formInputs,
			[evt.target.name]: evt.target.value,
		})
	}
	//const disable = this.state.password !== this.state.confirm

	return (
		<div>
			<div className='form-container'>
				<form autoComplete='off' onSubmit={handleSubmit}>
					<label>Username</label>
					<input
						type='text'
						name='username'
						value={formInputs.username}
						onChange={handleChange}
						required
					/>
					<label>Email</label>
					<input
						type='email'
						name='email'
						value={formInputs.email}
						onChange={handleChange}
						required
					/>
					<label>Password</label>
					<input
						type='password'
						name='password'
						value={formInputs.password}
						onChange={handleChange}
						required
					/>
					<label>Confirm</label>
					<input
						type='password'
						name='confirm'
						value={formInputs.confirm}
						onChange={handleChange}
						required
					/>
					<button type='submit'>SIGN UP</button>
				</form>
			</div>
			{/* <p className='error-message'>&nbsp;{this.state.error}</p> */}
		</div>
	)
}
