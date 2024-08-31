import React, { useState } from "react";
import { Link } from "react-router-dom";
import Camera from "../Sub Components/Camera";
// import Mic from "../Sub Components/Mic";
import ToggleSwitch from "../Sub Components/ToggleSwitch";
// import HardwareSelector from "../Sub Components/HardwareSelector";
import MediaDeviceSelector from "../Sub Components/MediaDeviceSelector";
import "./Screen1.css";
import Logo from "../Media/Vagaro_Logo.png";

// For Host Controls options
const optionArray = [
  "Start Recording",
  "Allow Microphone for All",
  "Allow Video for all",
  "Allow Chat for all",
  "Instructor Only Mode",
];

function startCall() {
  console.log("start call");
}

function cancelCall() {
  console.log("cancel call");
  location.reload();
}

// Screen1 is Meting setting screen for all the users
function Screen1({ camerasList, microphonesList, speakeresList, setCamera, setMicrophone, setSpeaker, userName, isHost}) {
  return (
    <>
      <div className="screen1_base">
        <div className="screen1_title">
          <img src={Logo} alt="" />
          <h3>{userName}</h3>
          <h3>Class Name</h3>
        </div>
        <div className="screen1_selector">
          <div className="screen1_selector_LHS">
            <div className="cam-display">
              <Camera cameraID={''} />
            </div>
            <div>
              {isHost && <h3>Host Settings</h3>}

              {isHost && optionArray.map((item, index) => {
                return <ToggleSwitch label={item} key={index} />;
              })}
            </div>
          </div>
          <div className="screen1_selector_RHS">
            <h3>Manage Settings</h3>
            <MediaDeviceSelector
             camerasList={camerasList}
             microphonesList={microphonesList}
             speakeresList={speakeresList}
             setCamera={setCamera}
             setMicrophone={setMicrophone}
             setSpeaker={setSpeaker}
            />
          </div>
        </div>
        <hr />
        <div>
          {/* Start Button will create the new meeting Link by calling server and related Parameters */}
          <button onClick={startCall}>  
            <Link to="/screen2">Start Call</Link>{" "}   
          </button>
          <button onClick={cancelCall}><Link to={'/'}>Cancel</Link></button> 
        </div>
      </div>
    </>
  );
}

export default Screen1;
