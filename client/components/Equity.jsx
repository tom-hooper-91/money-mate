import React from 'react'
import { connect } from 'react-redux'

function Equity ({ financials }) {
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <div className="row justify-content-center">
      <div className="col-lg-4">
        {financials.Name
          ? <>
            <h2 className='text-center'>{financials.Name}</h2>
            <div className='d-flex justify-content-center'>
              <table className='financials-table mb-3'>
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody border='1'>
                  <tr>
                    <th>Market Cap </th>
                    <td>${numberWithCommas(financials.MarketCapitalization)}</td>
                  </tr>
                  <tr>
                    <th>P/E </th>
                    <td>{financials.PERatio}</td>
                  </tr>
                  <tr>
                    <th>P/B </th>
                    <td>{financials.PriceToBookRatio}</td>
                  </tr>
                  <tr>
                    <th>EV/EBITDA </th>
                    <td>{financials.EVToEBITDA}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>{financials.Description}</p>
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
