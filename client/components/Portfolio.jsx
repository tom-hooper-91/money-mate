import React from 'react'
import { connect } from 'react-redux'
import PortfolioEntry from './PortfolioEntry'

function Portfolio ({ portfolio, history }) {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4 text-center align-center">
          <h1 className="fw-lighter">Portfolio</h1>
          <p>Here you can view which stocks you currently have in your portfolio. This information is stored in a database.  You will also see up to date pricing information from the Alpha Vantage external API</p>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {portfolio.map(entry => {
          return (
            <PortfolioEntry key ={entry.id} entry={entry} history={history}/>
          )
        })}
        <div className="col-lg-12">
          <hr />
        </div>
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
