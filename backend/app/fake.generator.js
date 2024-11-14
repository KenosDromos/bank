import { faker } from '@faker-js/faker'
import { prisma } from './prisma.js'
import { hash } from 'argon2'

async function registerUser(userData) {
	try {
		const isHaveUser = await prisma.user.findUnique({
			where: { phoneNumber: userData.phoneNumber }
		})

		if (isHaveUser) {
			console.log(
				`User with phone number ${userData.phoneNumber} already exists.`
			)
			return
		}

		const hashedPassword = await hash(userData.password)

		const user = await prisma.user.create({
			data: {
				phoneNumber: userData.phoneNumber,
				password: hashedPassword,
				firstName: userData.firstName,
				lastName: userData.lastName,
				dateOfBirth: userData.dateOfBirth
			}
		})

		console.log(`User ${user.firstName} ${user.lastName} added.`)
		return user
	} catch (error) {
		console.error(`Error adding user: ${error.message}`)
	}
}

async function generateFakeUsers(count) {
	for (let i = 0; i < count; i++) {
		const firstName = faker.person.firstName()
		const lastName = faker.person.lastName()
		const phoneNumber = faker.phone.number({ style: 'international' })
		const password = '1234'

		const dateOfBirth = faker.date.between({
			from: new Date(new Date().setFullYear(new Date().getFullYear() - 50)),
			to: new Date(new Date().setFullYear(new Date().getFullYear() - 18))
		})

		await registerUser({
			phoneNumber,
			password,
			firstName,
			lastName,
			dateOfBirth
		})
	}
}

generateFakeUsers(10)
	.then(() => console.log('User generation completed'))
	.catch(error => console.error(`Error in user generation: ${error.message}`))
