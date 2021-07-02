import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav ({ setTicker }) {
  const [search, setSearch] = useState('') // state for search bar
  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setTicker(search)
  }// Submit and set ticker to result of search bar text which is used for re rendering equity

  return (
    <nav className="navbar navbar-expand-sm navbar-dark dark-background mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">M-M</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/portfolio' className='nav-link'>Portfolio</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Options
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to='/portfolio/add' className='dropdown-item'>Add Position</Link>
                </li>
                <li>
                  <Link to='/portfolio/edit' className='dropdown-item'>Edit Position</Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Future Content</a>
            </li>
          </ul>
          <form className="d-flex" onSubmit={(event) => handleSubmit(event)}>
            <input className="form-control me-2" type="search" placeholder="Enter Stock Ticker" aria-label="Search" onChange={(event) => handleChange(event)} value={search}/>
            <button className="btn btn-outline-success" type="submit"><Link to={`/equity/${search}`}>Search</Link></button>
          </form>
        </div>
      </div>
    </nav>
  )
}
