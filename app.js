import 'dotenv/config'
import path from 'path'
import express from 'express'
import mercadopago from 'mercadopago'
import exphbs from 'express-handlebars'
import { router } from './routes/routes.js'

const port = process.env.PORT || 3000
const app = express()

mercadopago.configure({
    integrator_id: process.env.INTEGRATOR_ID,
    access_token: process.env.ACCESS_TOKEN
})  

app.engine('handlebars', exphbs())  
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('assets'))
app.use('/assets', express.static(path.join(process.cwd(), 'assets')))
app.use(router)

app.listen(port, () => console.log('Listening...'))