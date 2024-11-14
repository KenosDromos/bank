export const dashboardViews = [
	{
		key: 'dashboard_all',
		label: 'All',
		action: true,
	},
	{
		key: 'dashboard_withdrawal',
		label: 'Withdrawal',
		action: false,
	},
	{
		key: 'dashboard_savings',
		label: 'Savings',
		action: false,
	},
	{
		key: 'dashboard_deposit',
		label: 'Deposit',
		action: false,
	},
]

export const revenueFlow = [
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

export const available = {
	total: 1850,
	data: [
		{
			category: 'Food',
			value: 950,
		},
		{
			category: 'Clothes',
			value: 420,
		},
		{
			category: 'Other',
			value: 480,
		},
	],
}

export const transaction = [
	{
		id: '1231423123',
		icon: 'icons/blender_3d.svg',
		label: 'Blender',
		amount: 15.0,
		isAdd: false,
	},
	{
		id: '35232345252',
		icon: 'icons/youtube.svg',
		label: 'Youtube',
		amount: 10.0,
		isAdd: false,
	},
	{
		id: '1231424231412',
		icon: 'icons/youtube.svg',
		label: 'Youtube',
		amount: 10.0,
		isAdd: false,
	},
	{
		id: '35134324325',
		icon: 'icons/figma.svg',
		label: 'Figma',
		amount: 5.0,
		isAdd: false,
	},
]
