import { combineReducers } from 'redux'

import portfolio from './portfolio'
import quote from './AVData'
import financials from './AVFinancials'
import news from './news'

export default combineReducers({
  portfolio,
  quote,
  financials,
  news
})
