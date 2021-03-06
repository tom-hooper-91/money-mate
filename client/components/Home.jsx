import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import News from './News'

import { fetchNews } from '../actions/index'

function Home ({ dispatch, news }) {
  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4 text-center align-center">
          <h1 className='fw-light'>Welcome to Money-Mate</h1>
          <p>A place where you can track and update your US investment portfolio, get up to date financial data and news.</p>
          <hr />
        </div>
      </div>
      <div className="row d-flex justify-content-center text-center">
        {news.articles
          ? news.articles.map((article, key) => {
            return <News key={key} article={article}/>
          })
          : <h4>News feed loading...</h4>
        }
        <div className="col-lg-12">
          <hr />
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    news: state.news
  }
}

export default connect(mapStateToProps)(Home)
