import { Link } from 'react-router-dom'

export const Wallet = () => {
	return (
		<div>
			<p>This is Wallet</p>
			<Link to='/' className='underline'>
				go to dashboard
			</Link>
		</div>
	)
}
