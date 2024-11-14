import asyncHandler from 'express-async-handler'

import { prisma } from '../../prisma.js'

import {
	generateCVV,
	generateExpiryDate,
	generateUniqueCardNumber
} from './utils/generate.js'
import { CardFields } from '../../models/card.models.js'

export const createCard = async (accountId, userId, cardType) => {
	try {
		const newCard = await prisma.card.create({
			data: {
				accountId,
				userId,
				cardNumber: generateUniqueCardNumber(),
				expirationDate: generateExpiryDate(),
				cvv: generateCVV(),
				cardType
			}
		})
		return newCard
	} catch (error) {
		throw new Error(`Failed to create card: ${error.message}`)
	}
}

export const getAllCards = asyncHandler(async (req, res) => {
	const { userId } = req.body

	try {
		const cards = await prisma.card.findMany({
			where: {
				userId
			},
			select: CardFields
		})
		res.json(cards)
	} catch (error) {
		res
			.status(500)
			.json({ error: 'Failed to retrieve cards', details: error.message })
	}
})

export const getCardById = asyncHandler(async (req, res) => {
	const { cardId } = req.body

	try {
		const card = await prisma.card.findUnique({
			where: { id: cardId },
			select: CardFields
		})
		if (!card) {
			return res.status(404).json({ error: 'Card not found' })
		}
		res.json(card)
	} catch (error) {
		res
			.status(500)
			.json({ error: 'Failed to retrieve card', details: error.message })
	}
})

export const updateCard = asyncHandler(async (req, res) => {
	const { cardId } = req.params
	const { cardType, expirationDate, cvv } = req.body

	try {
		const card = await prisma.card.update({
			where: { id: cardId },
			data: { cardType, expirationDate, cvv }
		})
		res.json(card)
	} catch (error) {
		res
			.status(500)
			.json({ error: 'Failed to update card', details: error.message })
	}
})

export const partialUpdateCard = asyncHandler(async (req, res) => {
	const { cardId } = req.params
	const data = req.body

	try {
		const card = await prisma.card.update({
			where: { id: cardId },
			data
		})
		res.json(card)
	} catch (error) {
		res.status(500).json({
			error: 'Failed to partially update card',
			details: error.message
		})
	}
})

export const deleteCard = asyncHandler(async (req, res) => {
	const { cardId } = req.params

	try {
		await prisma.card.delete({ where: { id: cardId } })
		res.json({ message: 'Card deleted successfully' })
	} catch (error) {
		res
			.status(500)
			.json({ error: 'Failed to delete card', details: error.message })
	}
})
