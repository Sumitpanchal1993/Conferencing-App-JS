import React from 'react'
import './SplButtons.css'

function SplButtons({svg, work}) {
  return (
    <>
      <button className='splBtn' onClick={()=>{work()}}>
       <img src={svg} alt="" /> 
      </button>
    </>
  )
}

export default SplButtons
