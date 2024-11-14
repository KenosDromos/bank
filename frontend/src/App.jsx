import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Dashboard } from './components/dashboard/Dashboard'
import { Wallet } from './components/wallet/Wallet'
import { Chart } from './components/chart/Chart'
import { useEffect } from 'react'
import { LoginPage } from './components/Login'

export function App() {
	useEffect(() => {
		document.body.classList.add('bg-black')

		return () => {
			document.body.classList.remove('bg-black')
		}
	}, [])

	return (
		<Router>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Dashboard />} />
					<Route path='/wallet' element={<Wallet />} />
					<Route path='/chart' element={<Chart />} />
				</Route>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<Chart />} />
			</Routes>
		</Router>
	)
}
