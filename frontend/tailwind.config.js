/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			white: '#ffffff',
			black: '#141414',
			green: '#3eac91',
			yellow: '#dbfd82',
			purple: '#8b79f1',
		},
		extend: {},
	},
	plugins: [],
}
