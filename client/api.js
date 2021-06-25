import request from 'superagent'

const serverURL = 'http://localhost:3000/'

export function getPorfolio (setPortfolio) {
  return request
    .get(`${serverURL}portfolio/`)
    .then(response => {
      setPortfolio(response.body)
      return null
    })
    .catch(err => console.log(err))
}
