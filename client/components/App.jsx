import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import Portfolio from './Portfolio'

export default function App () {
  return (
    <div className='app'>
      <div className='container'>
        <Route path='/' component={Nav}/>
        <Route path='/' component={Header}/>
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
      </div>
    </div>
  )
}
