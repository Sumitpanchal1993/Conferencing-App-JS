import React from 'react'
import './PeoplesTile.css'

function PeoplesTile({people}) {
 console.log(people)
  function sliceName (name){
    let alpbhabets = name.slice(0, 2).toUpperCase()
    return( alpbhabets)
  }

  return (
    <>
    <div className='peopleTile'>
        <div className='details flexWraper'>
            <div className="userImage flexWraper">{sliceName(people.name)}</div>
            <div className="name">{people.name}</div>
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
