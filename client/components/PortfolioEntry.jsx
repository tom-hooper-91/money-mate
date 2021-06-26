import React, { useState, useEffect } from 'react'

import { getAVApiQuote } from '../api'

export default function PortfolioEntry ({ name, ticker, buyPrice }) {
  const [aVData, setAVData] = useState([])

  useEffect(() => {
    getAVApiQuote(setAVData, ticker)
  }, [])

  return (
    <div className="col-lg-4 dark-background round-edge m-3 text-center">
      <hr />
      {buyPrice && aVData['05. price'] &&
      <>
        <h4>{name}</h4>
        <p><em>Ticker: </em>{ticker}</p>
        <p><em>Buy Price: </em>${buyPrice.toFixed(2)}</p>
        <p><em>Current Price:</em> ${aVData['05. price']}</p>
        <p><em>Daily Change:</em> {aVData['10. change percent']}</p>
      </>
      }
      <hr />
    </div>
  )
}
