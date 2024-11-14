import { classNames } from '../../utils/merging'

export const DashboardNav = ({ views, viewAction }) => {
	return (
		<>
			{views.map(view => (
				<button
					key={view.key}
					onClick={() => viewAction(view.key)}
					className={classNames(
						view.action ? 'bg-opacity-100 text-opacity-100' : ' bg-opacity-15 text-opacity-80',
						'bg-green px-6 py-2 rounded-full transition duration-200 ease-in-out hover:bg-opacity-80'
					)}
				>
					{view.label}
				</button>
			))}
		</>
	)
}
