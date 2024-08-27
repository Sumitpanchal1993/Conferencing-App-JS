import React from 'react'
import SplButtons from '../Sub Components/SplButtons'
import ShareScreen from '../Media/ShareScreen.svg'
import './Navbar.css'
import HostName from '../Sub Components/HostName'
import ScreeShare from './ScreeShare'


const buttonIcons = [
  {
    icon : <span class="material-symbols-outlined">desktop_windows</span>,
    work :()=>{},
  },
  {
    icon : <span class="material-symbols-outlined">radio_button_checked</span>,
    work :()=>{},
  },
  {
    icon : <span class="material-symbols-outlined">videocam</span>,
    work :()=>{},
  },
  {
    icon : <span class="material-symbols-outlined">mic</span>,
    work :()=>{},
  },
  {
    icon : <span class="material-symbols-outlined">chat</span>,
    work :()=>{},
  },
  {
    icon : <span class="material-symbols-outlined">groups</span>,
    work :()=>{},
  },
  {
    icon : <span class="material-symbols-outlined">settings</span>,
    work :()=>{},
  },
]


function handleController (){
  let k = document.querySelector(".side-Pannel")
  if(k.style.display === 'block'){
    k.style.display = 'none';
  }
  else{k.style.display = 'block'}
}

function Navbar() {
  return (
   <>
   <nav>
    <div>
      <HostName/>
    </div>
    <div className='meeting-controls'>

      {buttonIcons.map((item, index)=>{
        return(
          <SplButtons icon = {item.icon} work={ handleController} />
        )
      })}
      {/* <ScreeShare/> */}
      <button>End Call</button>

    </div>
   </nav>
   </>
  )
}

export default Navbar
