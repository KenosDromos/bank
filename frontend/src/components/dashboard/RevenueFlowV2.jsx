import Highcharts, { Options } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useState } from 'react'

const data = [
	{ name: 'January', income: 3400 },
	{ name: 'February', income: 4200 },
	{ name: 'March', income: 3000 },
	{ name: 'April', income: 4700 },
	{ name: 'May', income: 3900 },
	{ name: 'June', income: 2800 },
	{ name: 'July', income: 3600 },
	{ name: 'August', income: 4500 },
	{ name: 'September', income: 3100 },
	{ name: 'October', income: 4100 },
	{ name: 'November', income: 3800 },
]

const categories = data.map(item => item.name.substring(0, 3))
const seriesData = data.map(item => item.income)

export const RevenueFlowV2 = () => {
	const [hoveredIndex, setHoveredIndex] = useState(null)

	/**
	 * @type {Highcharts.Options}
	 */
	const options = {
		chart: {
			type: 'column',
			backgroundColor: '#141414',
			height: '100%',
			style: { cursor: 'pointer' },
			events: {
				mouseOut: () => setHoveredIndex(null),
			},
		},
		title: { text: '' },
		xAxis: {
			categories,
			lineWidth: 0,
			tickWidth: 0,
			labels: { style: { color: '#555555', fontSize: '14px' } },
		},
		yAxis: {
			title: { text: '' },
			labels: {
				format: '${value}',
				style: { color: '#555555', fontSize: '14px' },
			},
			gridLineWidth: 0,
		},
		tooltip: {
			useHTML: true,
			animation: false,
			backgroundColor: '#141414',
			borderWidth: 0,
			shadow: false,
			followPointer: false,
			style: { pointerEvents: 'none', color: '#fff' },
		},
		series: [
			{
				name: 'Income',
				data: seriesData,
				color: {
					linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
					stops: [
						[0, '#3eac91'],
						[1, '#141414'],
					],
				},
			},
		],
		credits: {
			enabled: false,
		},
	}

	return (
		<div className='h-full w-full'>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	)
}
