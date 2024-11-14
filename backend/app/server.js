import 'colors'
import dotenv from 'dotenv'
import express from 'express'
import device from 'express-device'
import morgan from 'morgan'
import cors from 'cors'

import { prisma } from './prisma.js'
import { errorHandler, notFound } from './middleware/error.middleware.js'
import authRoutes from './auth/auth.routes.js'
import userRoutes from './user/user.routes.js'
import accountRoutes from './account/account.routes.js'

dotenv.config()

const app = express()

async function main() {
	const PORT = process.env.PORT

	if (process.env.NODE_ENV == 'development') {
		console.log('Success settings')
		app.use(morgan('dev'))
		app.use(
			cors({
				origin: `http://localhost:5173`,
				methods: ['GET', 'POST', 'PUT', 'DELETE'],
				allowedHeaders: ['Content-Type', 'Authorization'],
				credentials: true
			})
		)
	}

	app.use(express.json())
	app.use(device.capture())
	app.use('/api/auth', authRoutes)
	app.use('/api/user', userRoutes)
	app.use('/api/account', accountRoutes)

	app.use(notFound)
	app.use(errorHandler)

	app.listen(
		PORT,
		console.log(
			`⚡ Server run in ${process.env.NODE_ENV} mode on 
        port ${PORT}`.blue.bold
		)
	)
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
