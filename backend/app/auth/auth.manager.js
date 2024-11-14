import asyncHandler from 'express-async-handler'
import { hash, verify } from 'argon2'
import { getClientIp } from 'request-ip'

import { prisma } from '../prisma.js'
import { generateToken } from './generate-token.js'
import { UserFields } from '../models/user.models.js'

// @desc       Auth user
// @route      POST /api/user/login
// @access     Public
export const authUser = asyncHandler(async (req, res) => {
	console.log('Req', req.body)
	const { phoneNumber, password } = req.body

	// Search user by phone
	const user = await prisma.user.findUnique({
		where: {
			phoneNumber
		}
	})

	// User verify
	if (user) {
		// Add history
		const ipAddress = getClientIp(req) || 'unknown IP'
		const userDevice = req.device?.type || 'unknown device'

		await prisma.authenticationHistory.create({
			data: {
				userId: user.id,
				ipAddress,
				device: userDevice
			}
		})

		// correct password
		if (await verify(user.password, password)) {
			const token = generateToken(user.id)

			res.json({
				user: {
					id: user.id,
					phoneNumber: user.phoneNumber,
					firstName: user.firstName,
					lastName: user.lastName,
					dateOfBirth: user.dateOfBirth
				},
				token
			})
		} else {
			res.status(401)
			throw new Error('Email and password are not correct')
		}
	}
})

// @desc       Register user
// @route      POST /api/user/register
// @access     Public
export const registerUser = asyncHandler(async (req, res) => {
	const { phoneNumber, password, firstName, lastName, dateOfBirth } = req.body

	// Search by Phone
	const isHaveUser = await prisma.user.findUnique({
		where: {
			phoneNumber
		}
	})

	if (isHaveUser) {
		res.status(400)
		throw new Error('User already exists')
	}

	// Create new User
	const user = await prisma.user.create({
		data: {
			phoneNumber,
			password: await hash(password),
			firstName,
			lastName,
			dateOfBirth: new Date(dateOfBirth)
		},
		select: UserFields
	})

	// Generate JWT token (1h)
	const token = generateToken(user.id)

	res.json({ user, token })
})
