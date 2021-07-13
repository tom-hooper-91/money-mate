const express = require('express')
const request = require('superagent')
const router = express.Router()

const AVkey = process.env.AV_KEY

const newsKey = process.env.NEWS_KEY

router.get('/daily/:ticker', (req, res) => {
  const ticker = req.params.ticker
  const avApiURL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&interval=5min&apikey=${AVkey}`

  return request
    .get(avApiURL)
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

router.get('/quote/:ticker', (req, res) => {
  const ticker = req.params.ticker
  const avApiURL = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${AVkey}`

  return request
    .get(avApiURL)
    .then(result => res.json(result.body))
    .catch(err => console.log(err))
})

router.get('/financials/:ticker', (req, res) => {
  const ticker = req.params.ticker
  const avApiURL = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${AVkey}`

  return request
    .get(avApiURL)
    .then(result => res.json(result.body))
    .catch(err => console.log(err))
})

router.get('/news', (req, res) => {
  const newsURL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${newsKey}`
  return request
    .get(newsURL)
    .then(result => {
      return res.json(result.body)
    })
    .catch(err => console.log(err))
})

module.exports = router
