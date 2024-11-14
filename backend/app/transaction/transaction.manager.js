import asyncHandler from 'express-async-handler'
import prisma from '../prismaClient'

export const createTransaction = asyncHandler(async (req, res) => {
	const { accountId, userId, amount, transactionType } = req.body

	try {
		const transaction = await prisma.transaction.create({
			data: {
				accountId,
				userId,
				amount,
				transactionType
			}
		})
		res.status(201).json(transaction)
	} catch (error) {
		res
			.status(500)
			.json({ error: 'Failed to create transaction', details: error.message })
	}
})

export const getAllTransactions = asyncHandler(async (req, res) => {
	try {
		const transactions = await prisma.transaction.findMany()
		res.status(200).json(transactions)
	} catch (error) {
		res
			.status(500)
			.json({
				error: 'Failed to retrieve transactions',
				details: error.message
			})
	}
})

export const getTransactionsByUserId = asyncHandler(async (req, res) => {
	const { userId } = req.params

	try {
		const transactions = await prisma.transaction.findMany({
			where: { userId }
		})
		if (transactions.length > 0) {
			res.status(200).json(transactions)
		} else {
			res.status(404).json({ message: 'No transactions found for this user' })
		}
	} catch (error) {
		res
			.status(500)
			.json({
				error: 'Failed to retrieve transactions',
				details: error.message
			})
	}
})

export const getTransactionsByAccountId = asyncHandler(async (req, res) => {
	const { accountId } = req.params

	try {
		const transactions = await prisma.transaction.findMany({
			where: { accountId }
		})
		if (transactions.length > 0) {
			res.status(200).json(transactions)
		} else {
			res
				.status(404)
				.json({ message: 'No transactions found for this account' })
		}
	} catch (error) {
		res
			.status(500)
			.json({
				error: 'Failed to retrieve transactions',
				details: error.message
			})
	}
})
