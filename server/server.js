const path = require('path')
const express = require('express')

const portfolio = require('./routes/portfolio')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/portfolio', portfolio)

module.exports = server
