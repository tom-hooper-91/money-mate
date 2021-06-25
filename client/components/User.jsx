import React, { useState, useEffect } from 'react'
import { getUser } from '../api'

export default function User () {
  const [user, setUser] = useState([])

  const fetchData = async () => {
    const data = await getUser()
    setUser(data.results[0])
  }

  useEffect(() => {
    fetchData()
  }, [])

  const { dob, email, cell, name, picture, location } = user
  return (<div className="userWrapper">
    <div className="user">
      { name ? (
        <>
          <div className="userText">
           <h4>{`${name.title} ${name.first} ${name.last}`}</h4> 
          </div>
          <div className="userText">
            {`Age: ${dob.age}`}
          </div>
          <div className="userText">
            {`Phone: ${cell}`}
          </div>
          <div className="userText">
          {`Email: ${email}`}
          </div>
          <div className="userText">
            Location: {location.city}, {location.state}, {location.country}
          </div>
          <img className="userImage" src={picture.large} />
        </>) : <img className="spinner" src="./spinner.svg"></img> }
      </div>
    </div>
  )
}
