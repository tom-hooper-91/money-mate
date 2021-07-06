import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// import { getAVApiQuote } from '../api'
import { fetchAVQuote } from '../actions/'

function PortfolioEntry ({ name, ticker, buyPrice, shares, dispatch, quote }) {
  // const [aVData, setAVData] = useState([])

  useEffect(() => {
    // getAVApiQuote(setAVData, ticker)
    dispatch(fetchAVQuote(ticker))
  }, [])

  return (
    <>
      {buyPrice && quote['05. price']
        ? <div className="col-lg-3 dark-background round-edge text-center border m-3 shadow">
          <hr />
          <>
            <h4>{name}</h4>
            <p><em>Ticker: </em> {ticker}</p>
            <p><em>Buy Price: </em> ${buyPrice.toFixed(2)}</p>
            <p><em>Current Price:</em> ${quote['05. price']}</p>
            <p><em>Number of Shares: </em>{shares}</p>
            <p><em>Daily Change:</em> <span className={Number(quote['09. change']) > 0 ? 'gainer' : 'looser'}>{quote['10. change percent']}</span></p>
          </>
          <hr />
        </div>
        : <h4>Loading...</h4>
      }
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    quote: globalState.quote
  }
}

export default connect(mapStateToProps)(PortfolioEntry)
