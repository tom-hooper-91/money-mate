import { GET_NEWS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return action.news
    default:
      return state
  }
}

export default reducer
