import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import PortfolioEntry from './PortfolioEntry'

// import { fetchPortfolio } from '../actions'

function Portfolio ({ dispatch, portfolio }) {
  // useEffect(() => {
  //   dispatch(fetchPortfolio())
  // }, [])

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4 text-center align-center">
          <h1 className="fw-lighter">Portfolio</h1>
          <p>Here you can view which stocks you currently have in your portfolio. This information is stored in a database.  You will also see up to date pricing information from the Alhpa Vantage external API</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <hr />
        {portfolio.map(entry => {
          return <PortfolioEntry key={entry.id} name={entry.name} ticker={entry.ticker} buyPrice={entry.buy_price} shares={entry.number_shares}/>
        })}
        <hr />
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    portfolio: globalState.portfolio
  }
}

export default connect(mapStateToProps)(Portfolio)
