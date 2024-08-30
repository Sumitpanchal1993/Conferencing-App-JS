import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MediaDeviceSelector from '../Sub Components/MediaDeviceSelector'

function Screen0({setCamera, setMicrophone, setSpeaker}) {
    const [userName, setUsername] = useState('')
  

  return (
    <>
    <div>
      {/* Branch */}
        <div>
            <label htmlFor="username">Enter the User name</label>
            <input type="text" name="username" id=""  onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>
        <div>
          <MediaDeviceSelector  setCamera={setCamera } setMicrophone={setMicrophone} setSpeaker={setSpeaker} />
        </div>
        <div>
          <button><Link to= {'/screen1'}>Start Call</Link></button>
        </div>
          We will get the user data from here

    </div>      
    </>
  )
}

export default Screen0
