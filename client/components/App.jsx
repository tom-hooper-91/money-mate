import React, { useState, useEffect, useRef } from 'react'
import User from './User'
import Header from './Header';
function App () {
  const [users, setUsers] = useState([newUsers]);
  const newUsers = [<User />, <User />, <User />]
  const [page, setPage] = useState(1)
  const loader = useRef(null)


  useEffect(() => {
    var options = {
       root: null,
       rootMargin: "20px",
       threshold: 1.0
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
       observer.observe(loader.current)
    }
}, [])

useEffect(() => {
  const newList = users.concat([newUsers]);
  setUsers(newList)
}, [page])

const handleObserver = (entities) => {
  const target = entities[0];
  if (target.isIntersecting) {   
      setPage((page) => page + 1)
  }
}

  const handleClick = () => {
    setUsers(users => [...users, newUsers])
  }

  return (
    <>
    <Header />
    <div className="app">
      {users.map((newUser) => (
        newUsers
      ))}
    </div>
    {/* <button className="button" onClick={handleClick}>Show me more?</button> */}
    <div className="loading" ref={loader}>
                    <h2>Load More</h2>
           </div>
    </>
  )
}

export default App
