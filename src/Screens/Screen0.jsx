import React, { useRef, useState } from "react";
import "./Screen0.css";
import { Link, useNavigate } from "react-router-dom";

function Screen0({setUserName, setIsHost }) {
  const [showForm,  setShowForm] = useState(null);

  const userName =useRef()
  const navigate = useNavigate()
 
  const handleOnChange = (event)=>{    
    if(event.target.id === "join_existing_meeting"){
      setShowForm(true);
      setIsHost(false);
    }else{
      setShowForm(false);
      setIsHost(true)
    }
  }
  const handleNextBtn =  ()=>{
    let checkName =  userName.current.value.trim()
    console.log(checkName)
    if(checkName === ''){
      alert("Please Enter Your Name")
    }else if(showForm === null){
      alert("Please Choose one from meeting options")
    }else{
      setUserName(userName.current.value);
      navigate('/screen1')
    }
  }



  return (
    <>
      <div className="screen0_Base">
        <div>
          <h1>Welcome to Vagaro Team Meeting App</h1>
        </div>
        <hr />
        <div>
          <div className="input_Selection">
            <label htmlFor="username">Enter Your Full Name:</label>
            <input type="text" name="username" id="" ref={userName}/>
          </div>
    
          <h4>Select the Meeting type:</h4>
          <hr />
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
        <hr />
        <div>
          <button onClick={handleNextBtn}>Next</button>
        </div>
      </div>
    </>
  );
}

export default Screen0;
