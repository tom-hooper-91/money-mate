import { getPorfolio } from '../api'

export const SET_PORTFOLIO = 'SET_PORTFOLIO'

export function setPortfolio (portfolio) { // action creator
  return {
    type: SET_PORTFOLIO,
    portfolio
  }
}

export function fetchPortfolio () {
  return dispatch => {
    return getPorfolio()
      .then(portfolio => {
        dispatch((setPortfolio(portfolio)))
        return null
      })
  }
}
