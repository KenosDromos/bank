/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utils/money'
import { dashboardViews } from '../../data/dashboard'
import { useState } from 'react'
import { RevenueFlow } from './RevenueFlow'
import { Available } from './Available'
import { DashboardNav } from './DashboardNav'
import { Card } from '../UI/Card'
import { BankCardStack } from './BankCardStack'
import { Transaction } from './Transaction'

export const Dashboard = () => {
	const [views, setViews] = useState(dashboardViews)

	const viewAction = key => {
		const updatedViews = views.map(view => (view.key === key ? { ...view, action: true } : { ...view, action: false }))
		setViews(updatedViews)
	}

	return (
		<main className='flex-grow flex flex-row space-x-6'>
			<section className='flex-grow flex flex-col w-2/3 space-y-6 rounded-3xl'>
				<div className='flex flex-col justify-between bg-slate-400 h-[15%] rounded-3xl'>
					<h1 className='text-4xl font-medium mb-4'>My Dashboard</h1>
					<div className='flex gap-4 flex-wrap text-lg'>
						<DashboardNav views={views} viewAction={viewAction} />
					</div>
				</div>
				<div className='bg-green bg-opacity-15 h-[40%] rounded-3xl'>
					<RevenueFlow />
				</div>
				<div className='flex h-[45%] space-x-6'>
					<div className='bg-green bg-opacity-15 w-3/5  rounded-3xl h-full'>
						<Available />
					</div>
					<div className='flex flex-col w-2/5 h-full space-y-6'>
						<div className='h-[50%] bg-green bg-opacity-15  rounded-3xl'>
							<Card title='Income'>
								<div className='h-full flex px-6 items-center justify-between'>
									<div>
										<h1 className='text-3xl'>{formatCurrency(2240)}</h1>
										<p className='opacity-75'> This week&apos;s income</p>
									</div>
									<div className='bg-green py-1 min-w-14 rounded-full text-center'>
										<p>+12%</p>
									</div>
								</div>
							</Card>
						</div>
						<div className='h-[50%] bg-green bg-opacity-15  rounded-3xl'>
							<Card title='Expose'>
								<div className='h-full flex px-6 items-center justify-between'>
									<div>
										<h1 className='text-3xl'>{formatCurrency(1750)}</h1>
										<p className='opacity-75'> This week&apos;s income</p>
									</div>
									<div className='bg-purple py-1 min-w-14 rounded-full text-center'>
										<p>+9%</p>
									</div>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</section>

			<section className='flex flex-col w-1/3 space-y-6'>
				<div className='bg-green bg-opacity-15 h-2/5 rounded-3xl'>
					<BankCardStack />
				</div>
				<div className='bg-green bg-opacity-15 h-3/5 rounded-3xl'>
					<Transaction />
				</div>
			</section>
		</main>
	)
}
