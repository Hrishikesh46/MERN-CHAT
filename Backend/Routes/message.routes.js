import express from 'express'
import { sendMessage } from '../Controllers/message.controller.js'
import protectedRoute from '../Middleware/protectRoute.js'

const router = express.Router()

router.post('/send/:id', protectedRoute,sendMessage)

export default router