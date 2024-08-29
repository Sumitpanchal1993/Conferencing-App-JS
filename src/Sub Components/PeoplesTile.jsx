import React from 'react'
import './PeoplesTile.css'

function PeoplesTile({name}) {
  return (
    <>
    <div className='peopleTile'>
        <div className='details flexWraper'>
            <div className="userImage flexWraper">SP</div>
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
