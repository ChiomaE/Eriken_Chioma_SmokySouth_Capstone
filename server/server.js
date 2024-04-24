import express from 'express'
import cors from 'cors'
import foodRouter from './src/routers/food.router.js'

const app = express()

app.use(cors({
    credentials: true,
    origin: ['http://localhost:5173']
}))

app.use('/api/food', foodRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
})