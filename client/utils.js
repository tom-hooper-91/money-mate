export const checkPerformance = (quote, entry) => { // sets class for styling base on daily change info
  const equity = quote.find(pos => pos['01. symbol'] === entry.ticker)
  if (equity !== undefined) {
    if (Number(equity['09. change'] > 0)) return 'gainer'
    else return 'loser'
  }
}

export const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')// use toLocaleString
}
