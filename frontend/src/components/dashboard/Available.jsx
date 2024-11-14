/* eslint-disable react/prop-types */
import { PieChart, Pie, Cell, ResponsiveContainer, Text } from 'recharts'

import { available } from '../../data/dashboard'
import { Card } from '../UI/Card'
import { formatCurrency } from '../../utils/money'

const COLORS = ['#8b79f1', '#3eac91', '#dbfd82']

export const Available = () => {
	return (
		<Card title='Available'>
			<div className='h-full w-full flex items-center justify-center'>
				<div className='flex items-center'>
					<PieChart width={210} height={210}>
						<Text textAnchor='middle'>{available.total}</Text>
						<Pie
							data={available.data}
							innerRadius={70}
							outerRadius={100}
							fill='#8884d8'
							paddingAngle={5}
							dataKey='value'
							cornerRadius={10}
						>
							{available.data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
					</PieChart>
				</div>

				{/* Легенда справа от диаграммы */}
				<div className='ml-8'>
					{available.data.map((entry, index) => (
						<div key={index} className='flex items-center mb-2'>
							<div className='w-4 h-4 rounded-full' style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
							<div className='ml-2 flex flex-col'>
								<span className=''>{entry.category}</span>
								<span className=''>{formatCurrency(entry.value)}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</Card>
	)
}
