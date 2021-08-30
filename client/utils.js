/* eslint-disable indent */
export const checkDailyPerformance = (quote, entry) => { // sets class for styling base on daily change info
  const equity = quote.find(pos => pos['01. symbol'] === entry.ticker)
  if (equity !== undefined) {
    if (Number(equity['09. change'] > 0)) return 'gainer'
    else return 'loser'
  }
}

export const checkPerformanceReturnClass = (originalValue, currentValue) => {
  return originalValue < currentValue
    ? 'gainer'
    : 'loser'
}

export const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')// use toLocaleString?
}

export const refactorDate = (date) => {
  const splitDate = date.split('-')
  return `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`
}

export const checkResults = (results, entry) => {
  return !!results.find(pos => pos['01. symbol'] === entry.ticker)
}

export const checkForNull = (quote) => {
  return quote.filter(pos => pos !== undefined)
}

export const displayCurrentValue = (entry, results) => { // return current value of shares
  return Number(entry.number_shares * results.find(pos => pos['01. symbol'] === entry.ticker)['05. price']).toFixed(2)
}

export const percentageDiff = (a, b) => {
  return (100 * Math.abs((a - b) / ((a + b) / 2))).toFixed(2)
 }
