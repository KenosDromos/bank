export const formatCurrency = value =>
	`$ ${value.toLocaleString('en-US', {
		minimumFractionDigits: value % 1 === 0 ? 0 : 2,
		maximumFractionDigits: 2,
	})}`
