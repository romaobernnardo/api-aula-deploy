require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

// app.use(cors({
// 	origin: 'https://cubos.academy/'
// }))

// app.use(cors({
// 	origin: ['https://cubos.academy/', 'https://google.com/']
// }))


app.use(express.json())

app.get('/', async (req, res) => {
	return res.json('Api está Ok!')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log(`Servidor em pé na porta ${port}`)
})
