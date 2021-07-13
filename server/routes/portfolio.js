const express = require('express')
const request = require('superagent')
const router = express.Router()

const db = require('../db/db')

const AVkey = process.env.AV_KEY

const newsKey = process.env.NEWS_KEY

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
      new_id: response
    }))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.patch('/edit', (req, res) => {
  const position = req.body
  db.editPosition(position)
    .then(result => {
      res.json({
        msg: 'entry updated',
        updated: result
      })
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.delete('/edit', (req, res) => {
  const id = req.body.id
  db.deletePosition(id)
    .then(result => {
      res.json({
        msg: 'entry deleted',
        deleted: result
      })
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// ----- API ROUTES ------

router.get('/api/v1/daily/:ticker', (req, res) => {
  const ticker = req.params.ticker
  const avApiURL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&interval=5min&apikey=${AVkey}`

  return request
    .get(avApiURL)
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

router.get('/api/v1/quote/:ticker', (req, res) => {
  const ticker = req.params.ticker
  const avApiURL = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${AVkey}`

  return request
    .get(avApiURL)
    .then(result => res.json(result.body))
    .catch(err => console.log(err))
})

router.get('/api/v1/financials/:ticker', (req, res) => {
  const ticker = req.params.ticker
  const avApiURL = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${AVkey}`

  return request
    .get(avApiURL)
    .then(result => res.json(result.body))
    .catch(err => console.log(err))
})

router.get('/api/v1/news', (req, res) => {
  const newsURL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${newsKey}`
  return request
    .get(newsURL)
    .then(result => {
      console.log('result is ', result)
      return res.json(result.body)
    })
    .catch(err => console.log(err))
})

module.exports = router
