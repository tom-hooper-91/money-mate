import request from 'superagent'

const serverURL = 'http://localhost:3000/'

const key = '03DDZXXS6TMIXSJ5'

export function getPorfolio (setPortfolio) {
  return request
    .get(`${serverURL}portfolio/`)
    .then(response => {
      setPortfolio(response.body)
      return null
    })
    .catch(err => console.log(err))
}

export function getAVApi (setAVData, ticker) {
  const avApiURL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&interval=5min&apikey=${key}`

  return request
    .get(avApiURL)
    .then(response => {
      console.log(response.body)
      setAVData(response.body)
      return null
    })
    .catch(err => console.log(err))
}
