import React, { useState } from 'react'
import '../components/Style.css'

function Color() {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(255)
    const handleOnclick = (evemt)=>{
       setRed((prev) => (prev + 50) % 256)  // keep between 0–255
    setGreen((prev) => (prev + 30) % 256)
    setBlue((prev) => (prev + 20) % 256)
    }
  return (
    <div className='colorSet'>
        <input type="text"  />
        <button  onClick={handleOnclick}>change color</button>

        <div style={{height:'100px',background: `rgb(${red},${green},${blue})`}}></div>
    </div>

  )
}

export default Color