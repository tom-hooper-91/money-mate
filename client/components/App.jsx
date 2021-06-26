import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import Portfolio from './Portfolio'
import AddEntry from './AddEntry'
import EditEntry from './EditEntry'

export default function App () {
  return (
    <div className='app'>
      <div className='container round-edge-bottom'>
        <Route path='/' component={Nav}/>
        <Route path='/' component={Header}/>
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/portfolio/add' component={AddEntry} />
        <Route exact path='/portfolio/edit' component={EditEntry} />
      </div>
    </div>
  )
}
