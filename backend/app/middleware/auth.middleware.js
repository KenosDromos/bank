import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'

import { prisma } from '../prisma.js'
import { UserFields } from '../models/user.models.js'

export const protect = asyncHandler(async (req, res, next) => {
	let token

	if (req.headers.authorization?.startsWith('Bearer')) {
		token = req.headers.authorization.split(' ')[1]
	} else {
		res.status(401)
		throw new Error('Not authorized, token not provided')
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET)

		const userFound = await prisma.user.findUnique({
			where: { id: decoded.userId },
			select: UserFields
		})

		if (userFound) {
			req.user = userFound
			next()
		} else {
			res.status(401)
			throw new Error('Not authorized, user not found')
		}
	} catch (error) {
		res.status(401)
		throw new Error('Not authorized, token failed')
	}
})