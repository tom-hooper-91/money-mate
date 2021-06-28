import React, { useEffect } from 'react'

import { getAVApiFinancials } from '../api'

export default function Equity ({ ticker, setTicker, equity, setEquity, search }) {
  useEffect(() => {
    getAVApiFinancials(setEquity, search)
  }, []) // make this conditional with ticker

  // useEffect(() => {
  //   getAVApiFinancials(setEquity, ticker)
  // }, [ticker])

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
                <tbody>
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
