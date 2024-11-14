import asyncHandler from 'express-async-handler'

import { prisma } from '../../prisma.js'
import { generateKazakhstanIBAN } from './utils/generate.js'

export const createAccount = async (userId, type) => {
	try {
		const newAccount = await prisma.account.create({
			data: {
				userId,
				accountNumber: generateKazakhstanIBAN(),
				type,
				balance: 0.0
			}
		})
		return newAccount
	} catch (error) {
		throw new Error(`Failed to create account: ${error.message}`)
	}
}

// @desc       Get account user
// @route      GET /api/user/account/
// @access     Private
export const getUserAccounts = asyncHandler(async (req, res) => {
	const userId = req.user.id

	try {
		// Checking userId
		if (!userId) {
			return res.status(400).json({ error: 'User ID is required' })
		}

		// Search account
		const userAccounts = await prisma.account.findMany({
			where: { userId }
		})

		// Checking search account
		if (userAccounts.length === 0) {
			return res
				.status(404)
				.json({ message: 'No accounts found for this user' })
		}

		res.status(200).json(userAccounts)
	} catch (error) {
		res
			.status(500)
			.json({ error: 'Failed to get an account', details: error.message })
	}
})

// @desc       Get account by accountID
// @route      GET /api/user/account/
// @access     Private
export const getUserAccountByAccountID = asyncHandler(async (req, res) => {
	const { accountId } = req.body

	try {
		// Checking accountId
		if (!accountId) {
			return res.status(400).json({ error: 'AccountId is required' })
		}

		const account = await prisma.account.findUnique({
			where: { id: accountId }
		})

		if (!account) {
			return res.status(404).json({ error: 'Account not found' })
		}
		res.json(account)
	} catch (error) {
		res
			.status(500)
			.json({ error: 'Failed to get an account', details: error.message })
	}
})

// @desc       Put update account
// @route      GET /api/user/account/
// @access     Private
export const putUpdateUserAccount = asyncHandler(async (req, res) => {
	const { accountId, accountNumber, type, balance } = req.body

	try {
		const updatedAccount = await prisma.account.update({
			where: { id: accountId },
			data: {
				accountNumber,
				type,
				balance
			}
		})
		res.json(updatedAccount)
	} catch (error) {
		res
			.status(400)
			.json({ error: 'Failed to update account', details: error.message })
	}
})

// @desc       Patch update account
// @route      GET /api/user/account/
// @access     Private
export const patchUpdateUserAccount = asyncHandler(async (req, res) => {
	const { accountId, balance } = req.body

	try {
		const updatedAccount = await prisma.account.update({
			where: { id: accountId },
			data: {
				balance
			}
		})
		res.json(updatedAccount)
	} catch (error) {
		res
			.status(400)
			.json({ error: 'Failed to update account', details: error.message })
	}
})
