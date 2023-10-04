import { useState } from 'react'
import { getUser, signUp } from '../../utilities/users-service'
import { Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import FormWrapper from '../Miscellaneous/FormWrapper'
import { useBackgroundScroll } from '../Context/BackgroundScrollContext'

export default function SignUpForm({ setUser }) {
	//! fix confirmed disabled button
	//! fix showing errors
	const [formInputs, setFormInputs] = useState({
		username: '',
		email: '',
		password: '',
		confirm: '',
	})
	const [errors, setErrors] = useState({ email: '', username: '', password: '', confirm: '' })

	const { handleBackgroundScroll } = useBackgroundScroll()

	const handleSubmit = async (evt) => {
		evt.preventDefault()
		if (formInputs.password !== formInputs.confirm) {
			setErrors({ ...errors, confirm: 'Does not match password' })
			return
		}
		try {
			const formData = { ...formInputs }
			delete formData.confirm
			delete formData.error
			const res = await signUp(formData)
			const resJSON = await res.json()
			if (res.ok) {
				localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, resJSON.token)
				setUser(getUser())
				handleBackgroundScroll('north-east')
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
		setErrors({ ...errors, [evt.target.name]: '' })
	}

	return (
		<form autoComplete='off' onSubmit={handleSubmit}>
			<FormWrapper>
				<FormControl isInvalid={errors.username}>
					<FormLabel>USERNAME</FormLabel>
					<Input
						type='text'
						name='username'
						value={formInputs.username}
						onChange={handleChange}
						required
					/>
					<FormErrorMessage>{errors.username}</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={errors.email}>
					<FormLabel>EMAIL</FormLabel>
					<Input
						type='email'
						name='email'
						value={formInputs.email}
						onChange={handleChange}
						required
					/>
					<FormErrorMessage>{errors.email}</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={errors.password}>
					<FormLabel>PASSWORD</FormLabel>
					<Input
						type='password'
						name='password'
						value={formInputs.password}
						onChange={handleChange}
						required
					/>
					<FormErrorMessage>{errors.password}</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={errors.confirm}>
					<FormLabel>CONFIRM PASSWORD</FormLabel>
					<Input
						type='password'
						name='confirm'
						value={formInputs.confirm}
						onChange={handleChange}
						required
					/>
					<FormErrorMessage>{errors.confirm}</FormErrorMessage>
				</FormControl>
				<Button type='submit' colorScheme='brand.greenPine'>
					Sign Up
				</Button>
			</FormWrapper>
		</form>
	)
}
