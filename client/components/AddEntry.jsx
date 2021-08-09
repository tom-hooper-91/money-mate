import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addNewPosition } from '../actions/index'

function AddEntry ({ dispatch, history }) {
  const [formData, setFormData] = useState({
    name: '',
    ticker: '',
    buy_price: 0,
    number_shares: 0,
    date_purchased: 0
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => { // this works but does not include cateogry which is needed
    event.preventDefault()
    dispatch(addNewPosition(formData))
    setFormData({
      name: '',
      ticker: '',
      buy_price: 0,
      number_shares: 0,
      date_purchased: 0
    })
    history.push('/')
  }

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4 tile rounded shadow text-center">
          <form onSubmit={event => {
            handleSubmit(event)
          }}>
            <hr />
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Company Name: </label>
              <input name="name" type="text" className="form-control" id="name" value={formData.name}
                onChange={(event) => handleChange(event)} />
            </div>
            <div className="mb-3">
              <label htmlFor="ticker" className="form-label">Ticker: </label>
              <input name="ticker" type="text" className="form-control" id="ticker" value={formData.ticker}
                onChange={(event) => handleChange(event)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="buy_price" className="form-label">Buy Price: </label>
              <input name="buy_price" type="number" className="form-control" id="buy_price" value={formData.buy_price}
                onChange={(event) => handleChange(event)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="number_shares" className="form-label">Number of Shares: </label>
              <input name="number_shares" type="number" className="form-control" id="number_shares" value={formData.number_shares}
                onChange={(event) => handleChange(event)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="date_purchased" className="form-label">Number of Shares: </label>
              <input name="date_purchased" type="date" className="form-control" id="date_purchased" value={formData.date_purchased}
                onChange={(event) => handleChange(event)}/>
            </div>
            <button type="submit" className="btn btn-outline-light">Submit</button>
            <hr />
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <hr />
        </div>
      </div>
    </>
  )
}

export default connect()(AddEntry)
