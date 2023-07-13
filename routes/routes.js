import { Router } from 'express'
import { mp } from '../controllers/mp.js'
import { main } from '../controllers/main.js'

const router = Router()

router.get('/', main.main)
router.get('/detail', main.renderDetail)
router.post('/createPayment', mp.createPayment)

export { router }