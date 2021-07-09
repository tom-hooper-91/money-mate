import { GET_AVFINANCIALS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AVFINANCIALS:
      return action.financials
    default:
      return state
  }
}
export default reducer
