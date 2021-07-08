import React, { useEffect } from 'react'
import { connect } from 'react-redux'
 
import { getAVApiFinancials } from '../api'
import { fetchAVFinancials } from '../actions/index'

function Equity ({ setEquity, ticker, equity, dispatch, financials }) {
  // useEffect(() => {
  //   getAVApiFinancials(setEquity, ticker)
  // }, [ticker])// when ticker changes from search button click in nav, re-render the page with a new api call

  useEffect(() => {
    dispatch(getAVApiFinancials(ticker)) // this hansn't been checked
  }, [])

  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <div className="row">
      <div className="col-lg-12">
        {equity.Name
          ? <>
            <h2 className='text-center'>{equity.Name}</h2>
            <p>{equity.Description}</p>
            <div className='d-flex justify-content-center'>
              <table className='equity-table'>
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody border='1'>
                  <tr>
                    <th>Market Cap </th>
                    <td>${numberWithCommas(equity.MarketCapitalization)}</td>
                  </tr>
                  <tr>
                    <th>PE </th>
                    <td>{equity.PERatio}</td>
                  </tr>
                  <tr>
                    <th>PB </th>
                    <td>{equity.PriceToBookRatio}</td>
                  </tr>
                  <tr>
                    <th>EV/EBITDA </th>
                    <td>{equity.EVToEBITDA}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
          : <h4>Loading...Cannot find matching ticker</h4>
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    financials: state.financials
  }
}

export default connect(mapStateToProps)(Equity)
