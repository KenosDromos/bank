import {
	MdOutlineHome,
	MdOutlineAccountBalanceWallet,
	MdOutlineInsertChartOutlined,
	MdNotificationsNone,
	MdOutlineSettings,
	MdOutlineLogout,
} from 'react-icons/md'
import { IoSearch } from 'react-icons/io5'

const sizeIcon = 22

export const ICONS = {
	search: <IoSearch size={sizeIcon} />,
}

export const SIDEBAR_LINKS_MAIN = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <MdOutlineHome size={sizeIcon} />,
	},
	{
		key: 'wallet',
		label: 'Wallet',
		path: '/wallet',
		icon: <MdOutlineAccountBalanceWallet size={sizeIcon} />,
	},
	{
		key: 'chart',
		label: 'Chart',
		path: '/chart',
		icon: <MdOutlineInsertChartOutlined size={sizeIcon} />,
	},
]

export const SIDEBAR_LINKS_ADDITIONALLY = [
	{
		key: 'notification',
		label: 'Notification',
		path: '/notification',
		icon: <MdNotificationsNone size={sizeIcon} />,
	},
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <MdOutlineSettings size={sizeIcon} />,
	},
]

export const SIDEBAR_LOGOUT = {
	key: 'logout',
	label: 'Logout',
	path: '/logout',
	icon: <MdOutlineLogout size={sizeIcon} />,
}
