import { getPorfolio, addPosition, editPosition, deletePosition, getAVApiQuote } from '../api'

export const SET_PORTFOLIO = 'SET_PORTFOLIO'
export const ADD_POSITION = 'ADD_POSITION'
export const EDIT_POSITION = 'EDIT_POSITION'
export const DELETE_POSITION = 'DELETE_POSITION'

export const GET_AVQUOTE = 'GET_AVQUOTE'

// -----PORTFOLIO ACTION CREATORS -----

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

export function alterPosition (position) {
  return {
    type: EDIT_POSITION,
    position
  }
}

export function delPosition (id) {
  return {
    type: DELETE_POSITION,
    id
  }
}

// ----- AV ACTION CREATORS -----

export function setQuote (ticker) {
  return {
    type: GET_AVQUOTE,
    quote: ticker
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

export function editOnePosition (position) {
  return dispatch => {
    return editPosition(position)
      .then(response => {
        dispatch(alterPosition(position))
        return null
      })
  }
}

export function deleteOnePosition (id) {
  return dispatch => {
    return deletePosition(id)
      .then(response => {
        dispatch(delPosition(id))
        return null
      })
  }
}

// -----EXTERNAL API THUNKS -----

export function fetchAVQuote (ticker) {
  return dispatch => {
    getAVApiQuote(ticker)
      .then(quote => {
        console.log(quote)
        dispatch(setQuote(ticker))
        return null
      })
      .catch(err => console.log(err))
  }
}
