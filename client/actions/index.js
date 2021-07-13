import { getPorfolio, addPosition, editPosition, deletePosition, getAVApiQuote, getAVApiFinancials, getNewsArticles } from '../api'

export const SET_PORTFOLIO = 'SET_PORTFOLIO'
export const ADD_POSITION = 'ADD_POSITION'
export const EDIT_POSITION = 'EDIT_POSITION'
export const DELETE_POSITION = 'DELETE_POSITION'

export const GET_AVQUOTE = 'GET_AVQUOTE'

export const GET_AVFINANCIALS = 'GET_AVFINANCIALS'

export const GET_NEWS = 'GET_NEWS'

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

export function delPosition ({ id }) {
  return {
    type: DELETE_POSITION,
    id
  }
}

// ----- AV ACTION CREATORS -----

export function setQuote (quote) {
  return {
    type: GET_AVQUOTE,
    quote
  }
}

export function setFinancials (financials) {
  return {
    type: GET_AVFINANCIALS,
    financials
  }
}

// ----- NEWS ACTION CREATORS ------

export function setNews (news) {
  console.log('news is ----', news)
  return {
    type: GET_NEWS,
    news
  }
}

// ----- THUNKS -----

export function fetchPortfolio () {
  return dispatch => {
    return getPorfolio()
      .then(portfolio => {
        dispatch((setPortfolio(portfolio)))
        portfolio.forEach(pos => { // for each entry in portfolio do an external api call to get Global Quote information for quote state
          // eslint-disable-next-line promise/no-nesting
          getAVApiQuote(pos.ticker)
            .then(res => {
              dispatch(setQuote(res['Global Quote']))
              return null
            })
            .catch(err => console.log(err))
        })
        return null
      })
  }
}

export function addNewPosition (position) {
  return dispatch => {
    return addPosition(position)
      .then(response => {
        dispatch(createPosition(position))
        // eslint-disable-next-line promise/no-nesting
        getAVApiQuote(position.ticker)
          .then(res => {
            dispatch(setQuote(res['Global Quote']))
            return null
          })
          .catch(err => console.log(err))
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
        dispatch(setQuote(quote)) // was ticker ---- currently not in use?
        return null
      })
      .catch(err => console.log(err))
  }
}

export function fetchAVFinancials (ticker) {
  return dispatch => {
    getAVApiFinancials(ticker)
      .then(fin => {
        dispatch(setFinancials(fin))
        return null
      })
      .catch(err => console.log(err))
  }
}

export function fetchNews () {
  return dispatch => {
    getNewsArticles()
      .then(news => {
        dispatch(setNews(news))
        return null
      })
      .catch(err => console.log(err))
  }
}
