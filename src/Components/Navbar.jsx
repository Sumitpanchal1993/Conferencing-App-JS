import React from 'react'
import SplButtons from '../Sub Components/SplButtons'
import ShareScreen from '../Media/ShareScreen.svg'
import './Navbar.css'
import HostName from '../Sub Components/HostName'


function handleController (){
  return
}

function Navbar() {
  return (
   <>
   <nav>
    <div>
      <HostName/>
    </div>
    <div className='meeting-controls'>
      <SplButtons svg= {ShareScreen} work={ handleController} />
      <SplButtons svg= {ShareScreen} work={ handleController} />
      <SplButtons svg= {ShareScreen} work={ handleController} />
      <SplButtons svg= {ShareScreen} work={ handleController} />
      <SplButtons svg= {ShareScreen} work={ handleController} />
      <SplButtons svg= {ShareScreen} work={ handleController} />
      <SplButtons svg= {ShareScreen} work={ handleController} />
      <button>End Call</button>

    </div>
   </nav>
   </>
  )
}

export default Navbar
