import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Screen0() {
    const [userName, setUsername] = useState('')
    console.log(userName)

  return (
    <>
    <div>
        <div>
            <label htmlFor="username">Enter the User name</label>
            <input type="text" name="username" id=""  onChange={(e)=>{setUsername(e.target.value)}}/>
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
