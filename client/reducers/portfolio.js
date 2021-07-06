import { SET_PORTFOLIO, ADD_POSITION, EDIT_POSITION } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PORTFOLIO:
      return action.portfolio
    case ADD_POSITION:
      return [...state, action.position]
    case EDIT_POSITION:
      // eslint-disable-next-line no-case-declarations
      let existingPosition = state.find(pos => pos.id === action.position.id)
      // eslint-disable-next-line no-unused-vars
      existingPosition = action.position
      return [...state]
    default:
      return state
  }
}

export default reducer
