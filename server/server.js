const path = require('path')
require('dotenv').config()
const express = require('express')

const portfolio = require('./routes/portfolio')
const api = require('./routes/api')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/portfolio', portfolio)
server.use('/api/v1/', api)

module.exports = server
