import { ArrowForward } from './ArrowForward'

export const Card = ({ children, title, path }) => {
	return (
		<div className='w-full h-full flex flex-grow flex-col'>
			<div className='flex flex-row justify-between px-6 pt-4 pb-2 items-center'>
				<h1 className='text-2xl'>{title}</h1>
				<ArrowForward path={path ? path : '/'} />
			</div>
			<div className='h-full w-full'>{children}</div>
		</div>
	)
}
