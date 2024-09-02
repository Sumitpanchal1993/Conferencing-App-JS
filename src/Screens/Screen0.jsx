import React, { useRef, useState } from "react";
import "./Screen0.css";
import { Link, useNavigate } from "react-router-dom";
import { CallClient } from "@azure/communication-calling";
import { AzureCommunicationTokenCredential } from "@azure/communication-common";
import Cretentails from "../../Cretentails.json";
import Screen1 from "./Screen1";

function Screen0({ setUserName, setCredentials, credentials }) {
  // const [meetingType, setMeetingType] = useState('');
  const [showForm, setShowForm] = useState(false)
  const userName = useRef()




  const handleOnChange = (event) => {
    event.target.id === "join_existing_meeting" ? setShowForm(true) : setShowForm(false);
  };

  const handleNextBtn = async () => {
    setUserName(userName.current.value);

    try {
      const callClient = new CallClient();

      if (Cretentails.callAgent) {
        await Cretentails.callAgent.dispose();
      }

      Cretentails.tokenCredential = new AzureCommunicationTokenCredential(Cretentails.USER_ACCESS_TOKEN);
      Cretentails.callAgent = await callClient.createCallAgent(Cretentails.tokenCredential);

      // Set up a camera device to use.
      Cretentails.deviceManager = await callClient.getDeviceManager();
      await Cretentails.deviceManager.askDevicePermission({ video: true });
      await Cretentails.deviceManager.askDevicePermission({ audio: true });

      // Listen for an incoming call to accept.
      Cretentails.callAgent.on('incomingCall', async (args) => {
        try {
          Cretentails.incomingCall = args.incomingCall;
          // Cretentails.acceptCallButton.disabled = false;
          // Cretentails.startCallButton.disabled = true;
        } catch (error) {
          console.error(error);
        }
      });

      // Cretentails.startCallButton.disabled = false;
      // Cretentails.initializeCallAgentButton.disabled = true;
      console.log(Cretentails, "Cretentails");
      setCredentials(prev => ({ ...prev, ...Cretentails }));
      console.log(credentials)
    } catch (error) {
      console.error(error);
    }
  };

  if (!Cretentails.callAgent) {
    return (
      <>
        <div className="screen0_Base">
          <div>
            <h1>Welcome to Vagaro Team Meeting App</h1>
          </div>
          <div>
            <div className="input_Selection">
              <label htmlFor="username">Enter Your Name:</label>
              <input type="text" name="username" id="" ref={userName} />
            </div>
            <h4>Select the Meeting type:</h4>
            <div className="input_Selection">
              <label htmlFor="meeting_type">Start New Meeting</label>
              <input type="radio" name="meeting_type" id="start_new_meeting" value={'newMeeting'} onClick={(e) => { handleOnChange(e) }} />
            </div>
            <div className='input_Selection'>
              <label htmlFor="meeting_type">Join Existing Meeting</label>
              <input type="radio" name="meeting_type" id="join_existing_meeting" value={"existingMeeting"} onClick={(e) => { handleOnChange(e) }} />
            </div>
            {showForm &&
              <>
                <div className='input_Selection'>
                  <label htmlFor="meetingID">Enter the Meeting ID</label>
                  <input type="text" name="meetingID" id="meetingID" />
                </div>
                <div className='input_Selection'>
                  <label htmlFor="meetingPassword">Enter the Meeting Password</label>
                  <input type="password" name="meetingPassword" id="meetingPassword" />
                </div>
              </>
            }
          </div>
          <div>
            <button onClick={handleNextBtn}><Link
            // to={'/screen1'}
            >Next</Link></button>
          </div>
        </div>
      </>
    );
  }

  if(Cretentails.callAgent){
    // return <Link to={'/screen1'}>Start Call</Link>
    return <Screen1 setUserName={setUserName} setCredentials={setCredentials} credentials={credentials} />
  }
}

export default Screen0;
