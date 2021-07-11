import React from 'react'

export default function News ({ article }) {
  return (
    <div className='col-lg-3 m-2 tile rounded text-center shadow border'>
      <a href={article.url}>
        <h3 className='pt-2'>{article.title}</h3>
        <hr />
        <p>{article.description}</p>
        {article.urlToImage &&
          <img src={article.urlToImage} alt={article.title} className='img-fluid rounded mx-auto d-block w-75 mb-2'/>
        }
      </a>
    </div>
  )
}
