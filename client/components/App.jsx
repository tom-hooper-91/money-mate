import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchPortfolio } from '../actions'

import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'
import Portfolio from './Portfolio'
import AddEntry from './AddEntry'
import EditEntry from './EditEntry'
import Equity from './Equity'

function App ({ dispatch }) {
  useEffect(() => {
    dispatch(fetchPortfolio())
  }, [])// THUNK that fetches portfolio from database and triggers api calls for each entry

  return (
    <div className='app'>
      <Route path='/' component={Nav}/>
      <div className='container rounded mb-5'>
        <Route path='/' component={Header} />
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/portfolio/add' component={AddEntry} />
        <Route exact path='/portfolio/edit' component={EditEntry} />
        <Route exact path='/equity/:ticker' component={Equity}/>
      </div>
      <Route path='/' component={Footer} />
    </div>
  )
}

export default connect()(App)
