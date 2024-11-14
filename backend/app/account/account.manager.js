import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'
import { createAccount } from './account/account.js'
import { createCard } from './card/card.js'

export const createAccountWithCard = asyncHandler(async (req, res) => {
	const { userId, type, cardType } = req.body

	try {
		const account = await createAccount(userId, type)
		const card = await createCard(account.id, userId, cardType)

		res.status(201).json({
			cardNumber: card.cardNumber,
			expirationDate: card.expirationDate
		})
	} catch (error) {
		res.status(400).json({
			error: 'Failed to create an account with card',
			details: error.message
		})
	}
})
