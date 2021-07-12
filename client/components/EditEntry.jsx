import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPortfolio, editOnePosition, deleteOnePosition } from '../actions'

function EditEntry ({ dispatch, portfolio }) {
  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    ticker: '',
    buy_price: 0,
    number_shares: 0
  })

  useEffect(() => {
    dispatch(fetchPortfolio())
  }, [])

  const handleChange = (event) => {
    event.preventDefault()
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(editOnePosition(formData))
    setFormData({
      id: 0,
      name: '',
      ticker: '',
      buy_price: 0,
      number_shares: 0
    })
  }

  const handleSelect = (id) => {
    setFormData(portfolio.find(entry => entry.id === id))
  }

  const handleDelete = (event, id) => {
    event.preventDefault()
    dispatch(deleteOnePosition({ id }))
  }

  return (
    <>
      <div className="row justify-content-center">
        {portfolio.length &&
        portfolio.map((entry, key) => {
          return (
            <div className="col-lg-3 tile m-2 text-center rounded shadow" key={key}>
              <hr />
              <h4>{entry.name}</h4>
              <button onClick={() => handleSelect(entry.id)} className='btn btn-outline-primary'>Edit</button> <button onClick={(event) => handleDelete(event, entry.id)} className='btn btn-outline-danger'>Delete</button>
              <hr />

              {formData.id === entry.id &&
            <form onSubmit={event => handleSubmit(event)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Company Name: </label>
                <input name="name" type="text" className="form-control" id="name" value={formData.name}
                  onChange={(event) => handleChange(event)}/>
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
              <button type="submit" className="btn btn-outline-light">Update</button>
              <hr />
            </form>
              }
            </div>
          )
        })
        }
      </div>
      <div className="row">
        <div className="col-lg-12">
          <hr />
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    portfolio: globalState.portfolio,
    quote: globalState.quote
  }
}

export default connect(mapStateToProps)(EditEntry)
