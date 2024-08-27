import React from 'react'
import './SplButtons.css'

function SplButtons({icon, work}) {
  return (
    <>
      <button className='splBtn' onClick={()=>{work()}}>
      {icon}
      {/* <span class="material-symbols-outlined">{icon}</span> */}
      </button>
    </>
  )
}

export default SplButtons
