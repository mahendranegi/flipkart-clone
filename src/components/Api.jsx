import React, { useState, useEffect } from 'react'

function Api() {
  const [data, setData] = useState([])
  const url = 'https://fakestoreapi.com/products'

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])
console.log(data,'sadkjasjk')
  return (
    <div>
      {data.map((elem) => (
        <>
       { console.log(elem,'ggggg_____________--')}
        <h1 key={elem.id}>{elem.title}</h1>
        </>
      ))}
    </div>
  )
}

export default Api 
