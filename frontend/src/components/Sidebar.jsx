/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom'

import { classNames } from '../utils/merging'
import { SIDEBAR_LINKS_MAIN, SIDEBAR_LINKS_ADDITIONALLY, SIDEBAR_LOGOUT } from '../data/const'

const linkClasses = 'w-12 h-12 rounded-full flex items-center justify-center'

export const Sidebar = () => {
	return (
		<aside className='bg-red-700 w-16 flex flex-col justify-between h-full rounded-full mr-6 '>
			<div className='flex flex-col'>
				<div className='w-12 space-y-4 rounded-full'>
					<div className='bg-green bg-opacity-15 rounded-full'>
						{SIDEBAR_LINKS_MAIN.map(item => (
							<SidebarLink key={item.key} item={item} />
						))}
					</div>
					<div className='w-12 bg-green bg-opacity-15 rounded-full'>
						{SIDEBAR_LINKS_ADDITIONALLY.map(item => (
							<SidebarLink key={item.key} item={item} />
						))}
					</div>
				</div>
			</div>
			<div className='h-12 w-12 bg-green bg-opacity-15 rounded-full'>
				<SidebarLink key={SIDEBAR_LOGOUT.key} item={SIDEBAR_LOGOUT} />
			</div>
		</aside>
	)
}

const SidebarLink = ({ item }) => {
	const { pathname } = useLocation()

	return (
		<Link to={item.path} className={classNames(pathname === item.path ? 'bg-white text-green' : '', linkClasses)}>
			{item.icon}
		</Link>
	)
}
