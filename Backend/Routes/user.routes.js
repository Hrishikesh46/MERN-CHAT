import express from 'express'
import protectedRoute from '../Middleware/protectRoute.js'
import { getUserForSidebar } from '../Controllers/user.controller.js'

const router = express.Router()

router.get("/", protectedRoute ,getUserForSidebar)

export default router