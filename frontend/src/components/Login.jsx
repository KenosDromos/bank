import { useState } from 'react'
import { Background } from './Background'

export const LoginPage = () => {
	const [phoneNumber, setPhoneNumber] = useState('')
	const [password, setPassword] = useState('')
	const [errorMessage, setErrorMessage] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const handleLogin = async e => {
		e.preventDefault()
		setIsLoading(true)
		setErrorMessage('')

		try {
			console.log('Start')
			const response = await fetch('http://localhost:5000/api/auth/login', {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
				body: JSON.stringify({
					phoneNumber,
					password,
				}),
			})
			console.log('Req')
			console.log(response)
			if (response.ok) {
				const data = await response.json()
				console.log('Login successful:', data)
				localStorage.setItem('token', data.token)
				window.location.href = '/'
			} else {
				const errorData = await response.json()
				setErrorMessage(errorData.error || 'Failed to log in')
			}
		} catch (error) {
			console.log('error error')
			console.log(error)
			setErrorMessage('Network error. Please try again later.')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<>
			<Background />
			<div className='flex items-center justify-center min-h-screen bg-gray-100 text-white'>
				<div className='w-full max-w-md p-8 space-y-6 bg-green/20 rounded-3xl shadow-lg'>
					<h2 className='text-4xl font-bold text-center text-gray-700'>Login</h2>
					<form onSubmit={handleLogin} className='space-y-4'>
						<div>
							<label className='block text-sm font-medium'>Phone Number:</label>
							<input
								type='tel'
								value={phoneNumber}
								onChange={e => setPhoneNumber(e.target.value)}
								placeholder='+77451743767'
								required
								className='w-full px-3 py-2 mt-1 text-black border border-green/20 rounded focus:outline-none focus:ring-2 focus:ring-green'
							/>
						</div>
						<div>
							<label className='block text-sm font-medium'>Password:</label>
							<input
								type='password'
								value={password}
								onChange={e => setPassword(e.target.value)}
								placeholder='••••'
								required
								className='w-full px-3 py-2 mt-1 text-black border border-green/20 rounded focus:outline-none focus:ring-2 focus:ring-green'
							/>
						</div>
						{errorMessage && <p className='text-sm text-red-500'>{errorMessage}</p>}
						<button
							type='submit'
							disabled={isLoading}
							className='w-full px-4 py-2 font-medium text-white bg-green/50 rounded hover:bg-green focus:outline-none focus:ring-2 focus:ring-green'
						>
							{isLoading ? 'Logging in...' : 'Login'}
						</button>
					</form>
				</div>
			</div>
		</>
	)
}
