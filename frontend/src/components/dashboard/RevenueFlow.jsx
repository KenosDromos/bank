/* eslint-disable react/prop-types */
import { XAxis, YAxis, Tooltip, BarChart, Bar, ResponsiveContainer } from 'recharts'

import { revenueFlow as data } from '../../data/dashboard'
import { formatCurrency } from '../../utils/money'
import { Card } from '../UI/Card'

const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className='border border-white/40 bg-black/20 rounded-full text-center shadow-md max-w-sm p-2'>
				<span>{'+' + formatCurrency(payload[0].value)}</span>
			</div>
		)
	}
	return null
}

export const RevenueFlow = () => {
	return (
		<Card title='Revenue Flow'>
			<ResponsiveContainer width='100%' height='100%'>
				<BarChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 0,
						right: 10,
						left: 10,
						bottom: 0,
					}}
				>
					<XAxis
						dataKey='name'
						tickFormatter={name => name.substring(0, 3)}
						tick={{ fill: '#888888', fontSize: 14 }}
						axisLine={false}
						tickLine={false}
					/>
					<YAxis
						tick={{ fill: '#888888', fontSize: 14 }}
						tickFormatter={value => `$${value}`}
						axisLine={false}
						tickLine={false}
					/>
					<Tooltip content={<CustomTooltip />} cursor={false} animationDuration={200} />
					<Bar
						dataKey='income'
						fill='#8b79f1'
						radius={20}
						style={{
							fill: `url(#colorGradient)`,
						}}
					/>
					<defs>
						<linearGradient id='colorGradient' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='0%' stopColor='#3eac91' />
							<stop offset='100%' stopColor='#8b79f1' />
						</linearGradient>
					</defs>
				</BarChart>
			</ResponsiveContainer>
		</Card>
	)
}
