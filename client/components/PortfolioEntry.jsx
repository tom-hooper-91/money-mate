import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { fetchAVFinancials } from '../actions/index'

function PortfolioEntry ({ entry, quote, history, dispatch }) {
  const [results, setResults] = useState([])

  const checkForNull = (quote) => {
    const arr = quote.filter(pos => pos !== undefined)
    return arr
  }

  useEffect(() => {
    setResults(checkForNull(quote))// sets local state to global state, removing failed api calls
  }, [])

  const checkPerformance = (quote, entry) => { // sets class depending on daily change info
    const equity = quote.find(pos => pos['01. symbol'] === entry.ticker)
    if (equity !== undefined) {
      if (Number(equity['09. change'] > 0)) return 'gainer'
      else return 'loser'
    }
  }

  const handeClick = () => {
    dispatch(fetchAVFinancials(entry.ticker))
    history.push(`/equity/${entry.ticker}`)
  }

  return (
    <>
      <div className="col-lg-3 tile-link rounded text-center border m-3 shadow" onClick={() => handeClick()}>
        {entry.name
          ? <>
            <hr />
            <h4>{entry.name}</h4>
            <p><em>Ticker:</em> {entry.ticker}</p>
            <p><em>Buy Price:</em> ${entry.buy_price}</p>
            <p><em>Current Price:</em> ${results.find(pos => pos['01. symbol'] === entry.ticker) // if api info is available
              ? results.find(pos => pos['01. symbol'] === entry.ticker)['05. price']
              : ' Unavailable'
            }
            </p>
            <p><em>Number of Shares:</em> {entry.number_shares}</p>
            <p><em>Daily Change:</em> <span className={checkPerformance(results, entry)}> {results.find(pos => pos['01. symbol'] === entry.ticker)// if api info is available
              ? results.find(pos => pos['01. symbol'] === entry.ticker)['10. change percent']
              : ' Unavailable'
            }
            </span></p>
            <p><em>Current Value:</em> ${results.find(pos => pos['01. symbol'] === entry.ticker)
              ? Number(entry.number_shares * results.find(pos => pos['01. symbol'] === entry.ticker)['05. price']).toFixed(2)
              : ' Unavailable'
            }
            </p>
            <hr />
          </>
          : <h4>Loading....</h4>
        }
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
