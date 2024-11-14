import express from 'express'

import { createAccountWithCard } from './account.manager.js'
import { protect } from '../middleware/auth.middleware.js'
import { getAllCards } from './card/card.js'

const router = express.Router()
router.post('/addCard', protect, createAccountWithCard)
router.get('/getAllCards', protect, getAllCards)

export default router
