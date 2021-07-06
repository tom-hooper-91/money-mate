import { SET_PORTFOLIO, ADD_POSITION, EDIT_POSITION, DELETE_POSITION } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PORTFOLIO:
      return action.portfolio
    case ADD_POSITION:
      return [...state, action.position]
    case EDIT_POSITION:
      return state.map(pos => {
        if (pos.id === action.position.id) return action.position
        else return pos
      })
    case DELETE_POSITION:
      console.log(action)
      return state.filter(pos => pos.id !== action.id)
    default:
      return state
  }
}

export default reducer
