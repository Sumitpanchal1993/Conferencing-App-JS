import React, {useState} from "react";
// import { Link } from "react-router-dom";
import "./Screen2.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from '../Components/Navbar'
import ChatScreen from "../Components/ChatScreen";
import Camera from "../Sub Components/Camera";
// import { increment, decrement } from "../Redux/CounterSlice"; 
import PeoplesTile from "../Sub Components/PeoplesTile";


const peoples = [
  {name: 'Sumit'},
  {name: 'Manoj'},
  {name: 'Kanishk'},
  {name: 'Ashwini'},
  {name: 'Gokul'},
  {name: 'Sujeet'},
]


function Screen2() {
  const [isChatshown, setIsChatShown] = useState(false)  
  const [isPeoplesList, setIsPeoplesList] = useState(false)


  const storeData = useSelector((data) => {
    return data.counter.value;
  });
  const dispatch = useDispatch();
  return (
    <>
      <div className="screen2-base">
        <div className="main-display">
          <div className="screen">            
            <div className="peoples"><Camera/></div>          
            <div className="peoples"><Camera/></div>      
             
          </div>
          <div className="side-Pannel">
            {isChatshown ? <ChatScreen/>:peoples.map((item)=>{
              return <PeoplesTile name={item.name}/>
            })}
          </div>
        </div>
        <div className="controller">
          <Navbar 
            setIsChatShown={setIsChatShown}
            setIsPeoplesList={setIsPeoplesList}
          />             
        </div>
      </div>
    </>
  );
}

export default Screen2;

//experiment
// Main Screen consist of : video, controller, chat, peoples
// <button>
//   <Link to="/screen3">Click Me</Link>
// </button>
// <h1>{storeData}</h1>

// <button onClick={()=>{dispatch(increment())}}>
//   increment
// </button>
// <button onClick={()=>{dispatch(decrement())}}>
//   decrement
// </button>

