import React, { useState, useEffect } from 'react'

import { getAVApi } from '../api'

export default function PortfolioEntry ({ name, ticker, buyPrice }) {
  const [aVData, setAVData] = useState([])

  useEffect(() => {
    getAVApi(setAVData, ticker)
  }, [])

  return (
    <div className="col-lg-4 dark-background round-edge ms-5 me-5 text-center">
      <hr />
      <h4>{name}</h4>
      <p><strong>Ticker: </strong>{ticker}</p>
      <p><strong>Buy Price: </strong>${buyPrice}</p>
      <hr />
    </div>
  )
}
