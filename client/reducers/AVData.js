import { GET_AVQUOTE } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AVQUOTE:
      return [...state, action.quote]
    default:
      return state
  }
}

export default reducer
