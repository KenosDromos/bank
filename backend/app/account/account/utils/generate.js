export const generateKazakhstanIBAN = (bankCode = '9999') => {
	const countryCode = 'KZ'

	const accountNumber = String(Math.floor(Math.random() * 1e12)).padStart(
		12,
		'0'
	)

	let ibanWithoutChecksum = `${countryCode}00${bankCode}0${accountNumber}`

	let numericIban = ibanWithoutChecksum
		.split('')
		.map(char => (isNaN(char) ? char.charCodeAt(0) - 55 : char))
		.join('')

	let checksum = 98n - (BigInt(numericIban) % 97n)
	checksum = String(checksum).padStart(2, '0')

	return `${countryCode}${checksum}${bankCode}0${accountNumber}`
}
