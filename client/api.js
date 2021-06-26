import request from 'superagent'

const serverURL = 'http://localhost:3000/'

const key = '03DDZXXS6TMIXSJ5'

// internal API functions

export function getPorfolio (setPortfolio) {
  return request
    .get(`${serverURL}portfolio/`)
    .then(response => {
      setPortfolio(response.body)
      return null
    })
    .catch(err => console.log(err))
}

export function addPosition (position, setFormData) {
  return request
    .post(`${serverURL}portfolio/add`)
    .send(position)
    .then(response => {
      setFormData({
        name: '',
        ticker: '',
        buy_price: 0
      })
      return null
    })
    .catch(err => console.log(err))
}

export function editPosition (position, setFormData) {
  return request
    .patch(`${serverURL}portfolio/edit`)
    .send(position)
    .then(() => {
      setFormData({
        name: '',
        ticker: '',
        buy_price: 0
      })
      return null
    })
    .catch(err => console.log(err))
}
// external Alpha Vantage API Functions

export function getAVApiDaily (setAVData, ticker) {
  const avApiURL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&interval=5min&apikey=${key}`

  return request
    .get(avApiURL)
    .then(response => {
      setAVData(response.body)
      return null
    })
    .catch(err => console.log(err))
}

export function getAVApiQuote (setAVData, ticker) {
  const avApiURL = `https:www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${key}`

  return request
    .get(avApiURL)
    .then(response => {
      setAVData(response.body['Global Quote'])
      return null
    })
    .catch(err => console.log(err))
}

export function getAVApiFinancials (setEquity, ticker) {
  const avApiURL = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${key}`

  return request
    .get(avApiURL)
    .then(response => {
      setEquity(response.body)
      return null
    })
    .catch(err => console.log(err))
}
