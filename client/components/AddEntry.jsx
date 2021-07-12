import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addNewPosition } from '../actions/index'

function AddEntry ({ dispatch, history }) {
  const [formData, setFormData] = useState({
    name: '',
    ticker: '',
    buy_price: 0,
    number_shares: 0
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addNewPosition(formData))
    setFormData({
      name: '',
      ticker: '',
      buy_price: 0,
      number_shares: 0
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
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Company Name: </label>
              <input type="text" className="form-control" id="name" value={formData.name}
                onChange={(event) => handleChange(event)} />
            </div>
            <div className="mb-3">
              <label htmlFor="ticker" className="form-label">Ticker: </label>
              <input type="password" className="form-control" id="ticker" value={formData.ticker}
                onChange={(event) => handleChange(event)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="buy_price" className="form-label">Buy Price: </label>
              <input type="number" className="form-control" id="buy_price" value={formData.buy_price}
                onChange={(event) => handleChange(event)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="number_shares" className="form-label">Number of Shares: </label>
              <input type="number" className="form-control" id="number_shares" value={formData.number_shares}
                onChange={(event) => handleChange(event)}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>

  // <form onSubmit={event => {
  //   handleSubmit(event)
  // }}>
  //   <label htmlFor="name">Name: </label>
  //   <input type="text"
  //     name="name"
  //     id="name"
  //     value={formData.name}
  //     onChange={(event) => handleChange(event)}/>
  //   <label htmlFor="ticker">Ticker: </label>
  //   <input type="text"
  //     name="ticker"
  //     id="ticker"
  //     value={formData.ticker}
  //     onChange={(event) => handleChange(event)}/>
  //   <label htmlFor="buy_price">Buy Price $: </label>
  //   <input type="number"
  //     name="buy_price"
  //     id="buy_price"
  //     value={formData.buy_price}
  //     onChange={(event) => handleChange(event)}/>
  //   <label htmlFor="number_shares">Number of Shares Owned: </label>
  //   <input type="number"
  //     name="number_shares"
  //     id="number_shares"
  //     value={formData.number_shares}
  //     onChange={(event) => handleChange(event)}/>
  //   <button>Add Position</button>
  // </form>
  )
}

export default connect()(AddEntry)
