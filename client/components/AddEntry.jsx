import React, { useState } from 'react'

//api func

export default function AddEntry () {
  const [formData, setFormData] = useState({
    name: '',
    ticker: '',
    buy_price: 0
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // apiFunc.addWidget(formData, props.setWidgets, setFormData)
  }

  return (
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
      <input type="number"
        name="ticker"
        id="ticker"
        value={formData.ticker}
        onChange={(event) => handleChange(event)}/>
      <label htmlFor="buy_price">Buy Price: </label>
      <input type="text"
        name="buy_price"
        id="buy_price"
        value={formData.buy_price}
        onChange={(event) => handleChange(event)}/>
      <button>Add Position</button>
    </form>
  )
}
