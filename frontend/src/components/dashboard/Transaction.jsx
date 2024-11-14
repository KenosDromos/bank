import { Card } from '../UI/Card'
import { transaction } from '../../data/dashboard'

export const Transaction = () => {
	return (
		<Card title='Transaction' path='/wallet'>
			<div className='h-full flex flex-col'>
				<div className='h-[60%] py-2'>
					<div className='overflow-x-auto'>
						<table className='min-w-full'>
							<tbody className=''>
								{transaction.map(item => (
									<tr key={item.id}>
										<td className='px-6 py-2 whitespace-nowrap flex items-center'>
											<div className='p-2 bg-green/30 rounded-full mr-3'>
												<img src={item.icon} alt={item.label} className='w-6 h-6' />
											</div>
											<span className='text-sm font-medium text-gray-900'>{item.label}</span>
										</td>
										<td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
											<span className='text-base'>
												{item.isAdd ? '+ ' : '- '}${item.amount}
											</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				<div className='h-[40%] flex p-4 space-x-4'>
					<div className='w-1/2 bg-green bg-opacity-15 rounded-3xl flex flex-col'></div>
					<div className='w-1/2 bg-green bg-opacity-15 rounded-3xl'></div>
				</div>
			</div>
		</Card>
	)
}
