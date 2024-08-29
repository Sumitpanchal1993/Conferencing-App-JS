import React, {useState} from "react";
// import { Link } from "react-router-dom";
import "./Screen2.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from '../Components/Navbar'
import ChatScreen from "../Components/ChatScreen";
import Camera from "../Sub Components/Camera";
// import { increment, decrement } from "../Redux/CounterSlice"; 



function Screen2() {
  const [isChatshown, setIsChatShown] = useState(true)
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
            {isChatshown && <ChatScreen/>}
          </div>
        </div>
        <div className="controller">
          <Navbar 
            setIsChatShown={setIsChatShown}
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
