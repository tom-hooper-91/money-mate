import React from 'react'
import { connect } from 'react-redux'

function PortfolioEntry ({ entry, quote }) {
  const checkPerformance = (quote, entry) => {
    const equity = quote.find(pos => pos['01. symbol'] === entry.ticker)
    console.log(equity)
    if (Number(equity['09. change'] > 0)) return 'gainer'
    else return 'loser'
  }

  return (
    <>
      <div className="col-lg-3 dark-background round-edge text-center border m-3 shadow">
        <hr />
        <h4>{entry.name}</h4>
        <p><em>Ticker: </em> {entry.ticker}</p>
        <p><em>Buy Price: </em> ${entry.buy_price.toFixed(2)}</p>
        <p><em>Current Price:</em> ${quote.find(pos => pos['01. symbol'] === entry.ticker)['05. price']}</p>
        <p><em>Number of Shares: </em>{entry.number_shares}</p>
        <p><em>Daily Change:</em><span className={checkPerformance(quote, entry)}> {quote.find(pos => pos['01. symbol'] === entry.ticker)['10. change percent']}</span></p>
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    quote: globalState.quote
  }
}

export default connect(mapStateToProps)(PortfolioEntry)
