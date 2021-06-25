import React from 'react'

export default function PortfolioEntry ({ name, ticker, buyPrice }) {
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
