import express from 'express'
import { getMessages, sendMessage } from '../Controllers/message.controller.js'
import protectedRoute from '../Middleware/protectRoute.js'

const router = express.Router()

router.get('/:id', protectedRoute, getMessages)
router.post('/send/:id', protectedRoute,sendMessage)

export default router