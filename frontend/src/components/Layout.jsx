import { Outlet } from 'react-router-dom'

import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Background } from './Background'
import { RevenueFlow } from './dashboard/RevenueFlow'

export const Layout = () => {
	return (
		<>
			<Background />
			<div className='h-screen w-screen text-white'>
				<div className='h-full container mx-auto pt-8 pb-10 flex flex-col'>
					<Header />

					<div className='flex flex-row flex-grow mt-12'>
						<Sidebar />
						{<Outlet />}
					</div>
				</div>
			</div>
		</>
		// <div className='h-screen w-screen text-white flex justify-center items-center'>
		// 	<div className='w-full max-w-[600px] h-full max-h-[400px] bg-black'>
		// 		<RevenueFlow />
		// 	</div>
		// </div>
	)
}
