import React, { useEffect } from 'react'

import { getAVApiFinancials } from '../api'

export default function Equity ({ ticker, setTicker, equity, setEquity, search }) {
  useEffect(() => {
    getAVApiFinancials(setEquity, ticker)
  }, [])

  // useEffect(() => {
  //   getAVApiFinancials(setEquity, ticker)
  // }, [search])// this isn't working

  return (
    <div className="row">
      <div className="col-lg-12">
        {equity.Name
          ? <>
            <h2 className='text-center'>{equity.Name}</h2>
            <p>{equity.Description}</p>
          </>
          : <h4>Loading...Cannot find matching ticker</h4>
        }
      </div>
    </div>
  )
}
