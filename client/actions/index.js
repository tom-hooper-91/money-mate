import { getPorfolio, addPosition } from '../api'

export const SET_PORTFOLIO = 'SET_PORTFOLIO'
export const ADD_POSITION = 'ADD_POSITION'

// ----- ACTION CREATORS -----

export function setPortfolio (portfolio) {
  return {
    type: SET_PORTFOLIO,
    portfolio
  }
}

export function createPosition (position) {
  return {
    type: ADD_POSITION,
    position
  }
}

// ----- THUNKS -----

export function fetchPortfolio () {
  return dispatch => {
    return getPorfolio()
      .then(portfolio => {
        dispatch((setPortfolio(portfolio)))
        return null
      })
  }
}

export function addNewPosition (position) {
  return dispatch => {
    return addPosition(position)
      .then(response => {
        dispatch(createPosition(position))
        return null
      })
  }
}
