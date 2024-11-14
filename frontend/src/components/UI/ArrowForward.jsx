import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom'

export const ArrowForward = ({ path }) => {
	return (
		<Link to={path} className='flex space-x-2 items-center cursor-pointer opacity-75 hover:opacity-100'>
			<span>View all</span>
			<MdOutlineArrowForwardIos size={14} />
		</Link>
	)
}
