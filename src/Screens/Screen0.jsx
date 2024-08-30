import React, { useState } from "react";
import "./Screen0.css";
import { Link, useNavigate } from "react-router-dom";

function Screen0() {
  const [userName, setUsername] = useState("");
  const [meetingType, setMeetingType] = useState('');
  const [showForm,  setShowForm] = useState(false)
  const navigator = useNavigate() 
 
  const handleOnChange = (event)=>{    
    event.target.id === "join_existing_meeting"? setShowForm(true): setShowForm(false)    
  }


  const handleNextBtn =  ()=>{
    console.log('next clicked')
    navigator('/screen1')
  }



  return (
    <>
      <div className="screen0_Base">
        <div>
          <h1>Welcome to Vagaro Team Meeting App</h1>
        </div>
        <div>
          <div className="input_Selection">
            <label htmlFor="username">Enter Your Name:</label>
            <input type="text" name="username" id="" />
          </div>
          <h4>Select the Meeting type:</h4>
          <div className="input_Selection">
            <label htmlFor="meeting_type">Start New Meeting</label>
            <input type="radio" name="meeting_type" id="start_new_meeting" value={'newMeeting'} onClick={(e)=>{handleOnChange(e)}}/>
          </div>
          <div className='input_Selection'>
            <label htmlFor="meeting_type">Join Existing Meeting</label>
            <input type="radio" name="meeting_type" id="join_existing_meeting" value={"existingMeeting"} onClick={(e)=>{handleOnChange(e)}}/>
          </div>
          {showForm && 
          <>
          <div className='input_Selection'>
            <label htmlFor="meetingID">Enter the Meeting ID</label>
            <input type="text" name="meetingID" id="meetingID" />
          </div>
          <div className='input_Selection'>
            <label htmlFor="meetingPassword">Enter the Meeting Password</label>
            <input type="password" name="meetingPassword" id="meetingPassword"/>
          </div>
          </>
          }          
        </div>
        <div>
          <button onClick={handleNextBtn}>Next</button>
        </div>
      </div>
    </>
  );
}

export default Screen0;
