/* eslint-disable indent */
export const checkDailyPerformance = (quote, entry) => { // sets class for styling base on daily change info
  const equity = quote.find(pos => pos['01. symbol'] === entry.ticker)
  if (equity !== undefined) {
    if (Number(equity['09. change'] > 0)) return 'gainer'
    else return 'loser'
  }
}

export const checkPricePerformance = (originalValue, currentValue) => {
  return originalValue < currentValue
    ? 'gainer'
    : 'looser'
}

export const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')// use toLocaleString
}

export const refactorDate = (date) => {
  const splitDate = date.split('-')
  return `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`
}

export const checkResults = (results, entry) => {
  return !!results.find(pos => pos['01. symbol'] === entry.ticker)
}
