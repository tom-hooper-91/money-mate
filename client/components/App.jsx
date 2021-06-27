import React, { useState } from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import Portfolio from './Portfolio'
import AddEntry from './AddEntry'
import EditEntry from './EditEntry'
import Equity from './Equity'

export default function App () {
  const [ticker, setTicker] = useState('')
  const [equity, setEquity] = useState({})
  const [search, setSearch] = useState('')// this isn't working

  return (
    <div className='app'>
      <div className='container round-edge-bottom'>
        <Route path='/'><Nav ticker={ticker} setTicker={setTicker} search={search} setSearch={setSearch}/></Route>
        <Route path='/' component={Header}/>
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/portfolio/add' component={AddEntry} />
        <Route exact path='/portfolio/edit' component={EditEntry} />
        <Route exact path='/equity/:ticker'><Equity ticker={ticker} equity={equity} setEquity={setEquity} search={search}/></Route>
      </div>
    </div>
  )
}
