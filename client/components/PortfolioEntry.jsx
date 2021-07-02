import React, { useState, useEffect } from 'react'

import { getAVApiQuote } from '../api'

export default function PortfolioEntry ({ name, ticker, buyPrice, shares }) {
  const [aVData, setAVData] = useState([])

  useEffect(() => {
    getAVApiQuote(setAVData, ticker)
  }, [])

  return (
    <>
      {buyPrice && aVData['05. price']
        ? <div className="col-lg-3 dark-background round-edge text-center border m-3 shadow">
          <hr />
          <>
            <h4>{name}</h4>
            <p><em>Ticker: </em> {ticker}</p>
            <p><em>Buy Price: </em> ${buyPrice.toFixed(2)}</p>
            <p><em>Current Price:</em> ${aVData['05. price']}</p>
            <p><em>Number of Shares: </em>{shares}</p>
            <p><em>Daily Change:</em> <span className={Number(aVData['09. change']) > 0 ? 'gainer' : 'looser'}>{aVData['10. change percent']}</span></p>
          </>
          <hr />
        </div>
        : <h4>Loading...</h4>
      }
    </>
  )
}
