import React from 'react'
import './PeoplesTile.css'

function PeoplesTile({name}) {

  function sliceName (name){
    let alpbhabets = name.slice(0, 2).toUpperCase()
    return( alpbhabets)
  }

  return (
    <>
    <div className='peopleTile'>
        <div className='details flexWraper'>
            <div className="userImage flexWraper">{sliceName(name)}</div>
            <div className="name">{name}</div>
        </div>
        <div className='devices'>
            <span className="material-symbols-outlined">videocam</span>
            <span className="material-symbols-outlined">mic</span>
        </div>


    </div>
      
    </>
  )
}

export default PeoplesTile
