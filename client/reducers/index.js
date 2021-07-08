import { combineReducers } from 'redux'

import portfolio from './portfolio'
import quote from './AVData'
import financials from './AVFinancials'

export default combineReducers({
  portfolio,
  quote,
  financials
})
