import { SET_PORTFOLIO, ADD_POSITION } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PORTFOLIO:
      return action.portfolio
    case ADD_POSITION:
      return [...state, action.position]
    default:
      return state
  }
}

export default reducer
