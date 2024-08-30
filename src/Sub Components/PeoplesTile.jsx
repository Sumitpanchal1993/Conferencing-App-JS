import React from 'react'
import './PeoplesTile.css'

function PeoplesTile({people}) {
  function sliceName (name){
    let  arr = name.split(' ')   
    let alpbhabets = arr[0].slice(0, 1).toUpperCase() + arr[1].slice(0, 1).toUpperCase();
    return(alpbhabets)
  }

  return (
    <>
    <div className='peopleTile'>
        <div className='details flexWraper'>
            <div className="userImage flexWraper">{sliceName(people.name)}</div>
            <div className="name">{people.name}</div>
        </div>
        <div className='devices'>
            <span className="material-symbols-outlined">{people.isCameraOn ? "videocam" : "videocam_off"}</span>
            <span className="material-symbols-outlined">{people.isScreenShared && "present_to_all"}</span>
            <span className="material-symbols-outlined">{people.isMicOn ? "mic" : "mic_off"}</span>
        </div>


    </div>
      
    </>
  )
}

export default PeoplesTile
