import React, { useState, useEffect } from 'react'

import PortfolioEntry from './PortfolioEntry'

import { getPorfolio } from '../api'

export default function Portfolio () {
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    getPorfolio(setPortfolio)
  }, [])

  return (
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2>Portfolio</h2>
        <p>Here you can view which stocks you currently have in your portfolio. This information is stored in a database.</p>
      </div>
      {portfolio.map(entry => {
        return <PortfolioEntry key={entry.id} name={entry.name} ticker={entry.ticker} buyPrice={entry.buy_price}/>
      })}
    </div>
  )
}
