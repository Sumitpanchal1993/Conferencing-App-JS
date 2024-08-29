import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import SplButtons from '../Sub Components/SplButtons'
import ShareScreen from '../Media/ShareScreen.svg'
import './Navbar.css'
import HostName from '../Sub Components/HostName'
import ScreeShare from './ScreeShare'



<<<<<<< HEAD
function Navbar({setIsChatShown, setIsPeoplesList}) {
=======
function Navbar({setIsChatShown}) {
>>>>>>> 6965b29ac53c2a26ae5d680bed33030af2a01e8a
  const [isSharing, setIsSharing] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // an Array for the navbar function and display icon 
  const buttonIcons = [
    {
      icon : <span className="material-symbols-outlined">desktop_windows</span>,
      work : async () => {
          try {
              const stream = await navigator.mediaDevices.getDisplayMedia({
                  video: true
              });
              streamRef.current = stream;
              videoRef.current.srcObject = stream;
              videoRef.current.play();
              setIsSharing(true);
              document.getElementById('screenShared').style.display = 'block'
              console.log('screen start')
          } catch (error) {
              console.error('Error starting screen share:', error);
          }
      }
    },
    {
      icon : <span className="material-symbols-outlined">radio_button_checked</span>,
      work :()=>{alert('i will start recording the screen')},
    },
    {
      icon : <span className="material-symbols-outlined">videocam</span>,
      work :()=>{alert('i will stop the camera')},
    },
    {
      icon : <span className="material-symbols-outlined">mic</span>,
      work :()=>{ alert ( 'i will mute the mic')},
    },
    {
      icon : <span className="material-symbols-outlined">chat</span>,
      work :function handleController (){
        setIsChatShown(true)
<<<<<<< HEAD
        setIsPeoplesList(false)
        let k = document.querySelector(".side-Pannel")
        if(k.style.display === 'none'){
          k.style.display = 'block';
        }
        else{k.style.display = 'none'}
=======
        let k = document.querySelector(".side-Pannel")
        if(k.style.display === 'block'){
          k.style.display = 'none';
        }
        else{k.style.display = 'block'}
>>>>>>> 6965b29ac53c2a26ae5d680bed33030af2a01e8a
      },
    },
    {
      icon : <span className="material-symbols-outlined">groups</span>,
<<<<<<< HEAD
      work :function handleController (){
        setIsChatShown(false)
        setIsPeoplesList(true)
        let k = document.querySelector(".side-Pannel")
        if(k.style.display === 'none'){
          k.style.display = 'block';
        }
        else{k.style.display = 'none'}
      }
=======
      work :()=>{alert('I will Show the List of peoples in meeting')},
>>>>>>> 6965b29ac53c2a26ae5d680bed33030af2a01e8a
    },
    {
      icon : <span className="material-symbols-outlined">settings</span>,
      work :()=>{alert('I will show the controller settings')},
    },
  ]

//   const startScreenShare = async () => {
//     try {
//         const stream = await navigator.mediaDevices.getDisplayMedia({
//             video: true
//         });
//         streamRef.current = stream;
//         videoRef.current.srcObject = stream;
//         videoRef.current.play();
//         setIsSharing(true);
//     } catch (error) {
//         console.error('Error starting screen share:', error);
//     }
// };

const stopScreenShare = () => {
    if (streamRef.current) {      
        document.getElementById('screenShared').style.display = 'none'
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
        setIsSharing(false);
        console.log('screen stop')

    }
};


  return (
   <>
   <nav>
    <div>
      <HostName/>
    </div>
      <div className="screenShare" id='screenShared'>
         <video ref={videoRef} />
    {isSharing ?
        <button onClick={()=>{stopScreenShare()}}>Stop</button>:
        ""
      }
      </div>
    
    <div className='meeting-controls'>

      {buttonIcons.map((item, index)=>{
        return(
          <SplButtons key={index} icon = {item.icon} work={item.work} />
        )
      })}
      
      <button><Link to ={'/screen3'}>End Call</Link></button>

    </div>
   </nav>
   </>
  )
}

export default Navbar
