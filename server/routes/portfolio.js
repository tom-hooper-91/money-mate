const express = require('express')

const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getPortfolio()
    .then(portfolio => {
      res.json(portfolio)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/add', (req, res) => {
  const postition = req.body
  db.addPosition(postition)
    .then((response) => res.json({
      msg: 'entry added',
      id: response
    }))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
