import { useState } from 'react'

import { classNames } from '../../utils/merging'
import { formatCurrency } from '../../utils/money'
import { Card } from '../UI/Card'

const cards = [
	{ id: 1, number: '**** **** **** 1234', balance: 23420 },
	{ id: 2, number: '**** **** **** 5678', balance: 5320 },
	{ id: 3, number: '**** **** **** 9101', balance: 4 },
]

export const BankCardStack = () => {
	const [cardStack, setCardStack] = useState(cards)

	const handleCardClick = index => {
		const newStack = [cardStack[index], ...cardStack.filter((_, i) => i !== index)]
		setCardStack(newStack)
	}

	return (
		<Card title='My Card' path='/wallet'>
			<div className='relative flex justify-center items-center h-full mt-5'>
				{cardStack.map((card, index) => (
					<div
						key={card.id}
						className={classNames(
							'absolute w-64 h-40  rounded-3xl shadow-md transform transition-transform duration-300 xl:w-72',
							index === 0 ? 'z-10 bg-green' : 'cursor-pointer bg-[#1f7c65] border border-green',
							index > 0 ? 'hover:translate-y-4' : ''
						)}
						style={{
							top: `${index * 20}px`,
							zIndex: cardStack.length - index,
						}}
						onClick={() => handleCardClick(index)}
					>
						<div className='flex flex-col justify-between h-full p-4 text-white select-none'>
							<div className='flex justify-end'>
								{/* <div className='text-lg font-bold'>Card {card.id}</div> */}
								<div className='text-lg font-bold'>Nexus Bank</div>
							</div>
							<div className=''>
								<span>Total Balance</span>
								<h1 className='text-3xl font-bold'>{formatCurrency(card.balance)}</h1>
							</div>
							<div className='text-sm opacity-75'>{card.number}</div>
						</div>
					</div>
				))}
			</div>
		</Card>
	)
}
