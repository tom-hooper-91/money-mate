import request from 'superagent'

const serverURL = 'http://localhost:3000/'

// ---- internal API functions using Redux ----

export function getPorfolio () {
  return request
    .get(`${serverURL}portfolio/`)
    .then(response => {
      return response.body
    })
    .catch(err => console.log(err))
}

export function addPosition (position) {
  return request
    .post(`${serverURL}portfolio/add`)
    .send(position)
    .then(response => {
      return response.body
    })
    .catch(err => console.log(err))
}

export function editPosition (position) {
  return request
    .patch(`${serverURL}portfolio/edit`)
    .send(position)
    .then(response => {
      return response.body
    })
    .catch(err => console.log(err))
}

export function deletePosition (id) {
  return request
    .delete(`${serverURL}portfolio/edit`)
    .send(id)
    .then(response => {
      return response.body
    })
    .catch(err => console.log(err))
}

// ---- external Alpha Vantage API Functions ----

export function getAVApiDaily (setAVData, ticker) { // not in use
  return request
    .get(`${serverURL}api/v1/daily/${ticker}`)
    .then(response => {
      setAVData(response.body)
      return null
    })
    .catch(err => console.log(err))
}

export function getAVApiQuote (ticker) {
  return request
    .get(`${serverURL}api/v1/quote/${ticker}`)
    .then(response => {
      return response.body
    })
    .catch(err => console.log(err))
}

export function getAVApiFinancials (ticker) {
  return request
    .get(`${serverURL}api/v1/financials/${ticker}`)
    .then(response => {
      return response.body
    })
    .catch(err => console.log(err))
}

// ------ NEWS THUNK ------

export function getNewsArticles () {
  return request
    .get(`${serverURL}api/v1/news`)
    .then(response => {
      return response.body
    })
    .catch(err => console.log(err))
}
