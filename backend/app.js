const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes/router')
 
app.use(express.json())
app.use(cors())
app.use('/', router)


const port = 8081
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
}) 