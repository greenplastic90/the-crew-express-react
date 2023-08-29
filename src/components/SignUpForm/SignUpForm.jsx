import { useState } from 'react'
import { signUp } from '../../utilities/users-service'

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
			// The promise returned by the signUp service method
			// will resolve to the user object included in the
			// payload of the JSON Web Token (JWT)
			const user = await signUp(formData)
			// Update user state with user
			setUser(user)
		} catch (error) {
			// Invalid signup
			setErrors(error.errors)
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
					<button
						type='submit'
						// disabled={disable}
					>
						SIGN UP
					</button>
				</form>
			</div>
			{/* <p className='error-message'>&nbsp;{this.state.error}</p> */}
		</div>
	)
}
