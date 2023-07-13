import { Router } from 'express'
import { mp } from '../controllers/mp.js'
import { main } from '../controllers/main.js'

const router = Router()

router.get('/', main.main)
router.get('/success', main.success)
router.get('/pending', main.pending)
router.get('/failure', main.failure)
router.get('/detail', main.renderDetail)
router.post('/createPayment', mp.createPayment)
router.post('/notifications', mp.notifications)

export { router }