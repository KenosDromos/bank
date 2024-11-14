import { ICONS } from '../data/const'

export const Header = () => {
	return (
		<header className='h-16 flex items-center justify-between'>
			<div className='flex flex-grow mr-8'>
				<a href='/' className='flex items-center space-x-2 mr-12'>
					<img src='icons/logo.svg' alt='Logo NexusBank' className='flex-none h-12 w-12' />
					<span className='font-medium'>NexusBank</span>
				</a>
				<div className='relative flex items-center w-full max-w-full'>
					<div className='pointer-events-none absolute pl-4 opacity-90'>{ICONS.search}</div>
					<input
						type='text'
						name='search'
						id='search'
						placeholder='Search payment'
						className='bg-green bg-opacity-15 block w-full max-w-xs sm:max-w-md md:max-w-lg h-full rounded-full border-0 py-1.5  pl-12 placeholder:text-opacity-80 placeholder:text-white border-green active:outline-none focus:outline-none'
					/>
				</div>
			</div>
			<div className='relative flex flex-row items-center space-x-2'>
				<span className='font-medium'>Hi, Kenos!</span>
				<img src='profile/avatar.jpg' alt='Logo NexusBank' className='flex-none h-16 w-16 rounded-full' />
			</div>
		</header>
	)
}
