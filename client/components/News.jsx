import React from 'react'

export default function News ({ article }) {
  return (
    <div className='col-lg-7 dark-background rounded text-center mb-4 '>
      <h3 className='pt-2'><a href={article.url}>{article.title}</a></h3>
      <hr />
      <p>{article.description}</p>
      {article.urlToImage &&
        <img src={article.urlToImage} alt={article.title} className='img-fluid rounded mx-auto d-block w-75 mb-2'/>
      }
    </div>
  )
}
