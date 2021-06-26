import React, { useState, useEffect } from 'react'

import { getAVApiFinancials } from '../api'

export default function Equity (props) {
  const ticker = props.match.params.ticker
  const [equity, setEquity] = useState({})

  useEffect(() => {
    getAVApiFinancials(setEquity, ticker)
  }, [])

  return (
    <div className="row">
      <div className="col-lg-12">
        {equity.Name
          ? <>
            <h2 className='text-center'>{equity.Name}</h2>
            <p>{equity.Description}</p>
          </>
          : <h4>Loading...</h4>
        }
      </div>
    </div>
  )
}
