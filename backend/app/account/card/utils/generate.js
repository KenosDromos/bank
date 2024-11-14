export const generateUniqueCardNumber = () => {
	const cardNumber =
		'4000' + Math.floor(100000000000 + Math.random() * 900000000000).toString()
	return cardNumber
}

export const generateExpiryDate = () => {
	const date = new Date()
	date.setFullYear(date.getFullYear() + 3)
	date.setMonth(date.getMonth())
	return date
}

export const generateCVV = () => {
	return (Math.floor(Math.random() * 900) + 100).toString()
}
