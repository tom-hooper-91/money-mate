import { SET_PORTFOLIO } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PORTFOLIO:
      return action.portfolio
    default:
      return state
  }
}

export default reducer
