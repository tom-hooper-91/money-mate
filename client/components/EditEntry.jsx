import React, { useState, useEffect } from 'react'

import { editPosition, getPorfolio, deletePosition } from '../api'

export default function EditEntry () {
  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    ticker: '',
    buy_price: 0
  })
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    getPorfolio(setPortfolio)
  }, [])

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    editPosition(formData, setFormData)
    getPorfolio(setPortfolio)
  }

  const handleSelect = (id) => {
    setFormData(portfolio.find(entry => entry.id === id))
  }

  const handleDelete = (event, id) => {
    event.preventDefault()
    deletePosition({ id })
    getPorfolio(setPortfolio)
  }

  return (
    <>
      <ul>
        {portfolio.length &&
        portfolio.map(entry => {
          return <li key={entry.id}>{entry.name} <button onClick={() => handleSelect(entry.id)}>Edit</button><button onClick={(event) => handleDelete(event, entry.id)}>Delete</button></li>
        })
        }
      </ul>
      {formData.id > 0 &&
      <form onSubmit={event => {
        handleSubmit(event)
      }}>
        <label htmlFor="name">Name: </label>
        <input type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={(event) => handleChange(event)}/>
        <label htmlFor="ticker">Ticker: </label>
        <input type="text"
          name="ticker"
          id="ticker"
          value={formData.ticker}
          onChange={(event) => handleChange(event)}/>
        <label htmlFor="buy_price">Buy Price $: </label>
        <input type="number"
          name="buy_price"
          id="buy_price"
          value={formData.buy_price}
          onChange={(event) => handleChange(event)}/>
        <label htmlFor="number_shares">Number of Shares Owned: </label>
        <input type="number"
          name="number_shares"
          id="number_shares"
          value={formData.number_shares}
          onChange={(event) => handleChange(event)}/>
        <button>Update Position</button>
      </form>
      }
    </>
  )
}
