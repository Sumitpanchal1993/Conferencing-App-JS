import { useMemo, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { fetchDevices } from "./Utility/FetchDevices";

//Azure Imports
// import { AzureCommunicationTokenCredential } from "@azure/communication-common";
// import { CallComposite, fromFlatCommunicationIdentifier, useAzureCommunicationCallAdapter } from "@azure/communication-react";

// Custom Components imports
import Screen0 from "./Screens/Screen0";
import Screen1 from "./Screens/Screen1";
import Screen2 from "./Screens/Screen2";
import Screen3 from "./Screens/Screen3";
import Screen4 from "./Screens/Screen4";

function App() {
  const [userToken, setUserToken] = useState(null); //for user token from backend
  const [userName, setUserName] = useState(null); //for user name
  const [devicesList, setDevicesList] = useState(null);
  const [camerasList, setCamerasList] = useState(null); //list of cameras
  const [microphonesList, setMicrophonesList] = useState(null); //list of microphone
  const [speakeresList, setSpeakersList] = useState(null); //list of audio output
  const [camera, setCamera] = useState(null); //Selected camera
  const [microphone, setMicrophone] = useState(null); //Selected microphone
  const [speaker, setSpeaker] = useState(null); //Selected Speaker
  const [isRecording, setIsRecording] = useState(false); //for the recording status
  const [micForAll, setMicForAll] = useState(false); //for allowing mic for all
  const [videoForAll, setVideoForAll] = useState(false); // for allowing video for all
  const [chatForAll, setChatForAll] = useState(false); // for allowing all to chat
  const [isinstructorOnly, setisinstructorOnly] = useState(false); // for only instructor mode

  // console.log(camera)
  // console.log(microphone)
  // console.log(speaker)

  // funcions
  // const fetchDevices = async () => {
  //   try {
  //     const deviceList = await navigator.mediaDevices.enumerateDevices();
  //     const cameras = deviceList.filter((device) => device.kind === "videoinput");
  //     const microphones = deviceList.filter((device) => device.kind === "audioinput");
  //     const speakers = deviceList.filter((device) => device.kind === "audiooutput");
  //     console.table(deviceList);
  //     setCamerasList(cameras);
  //     setMicrophonesList(microphones);
  //     setSpeakersList(speakers);
  //     setDevices(deviceList);
  //   } catch (err) {
  //     console.error("Error fetching media devices:", err);
  //   }
  // };

  // const displayName = 'Sumit Panchal'

  // Define the ACS User Details here
  // const [userID, setuserID] = useState("8:acs:943cc36e-35ac-4e4a-a8c6-904c7917365a_00000022-1a18-3ae8-f883-08482200d84e")
  // const [token, setToken] = useState('eyJhbGciOiJSUzI1NiIsImtpZCI6IjYwNUVCMzFEMzBBMjBEQkRBNTMxODU2MkM4QTM2RDFCMzIyMkE2MTkiLCJ4NXQiOiJZRjZ6SFRDaURiMmxNWVZpeUtOdEd6SWlwaGsiLCJ0eXAiOiJKV1QifQ.eyJza3lwZWlkIjoiYWNzOjk0M2NjMzZlLTM1YWMtNGU0YS1hOGM2LTkwNGM3OTE3MzY1YV8wMDAwMDAyMi0xYTE4LTNhZTgtZjg4My0wODQ4MjIwMGQ4NGUiLCJzY3AiOjE3OTIsImNzaSI6IjE3MjQzMzIyODMiLCJleHAiOjE3MjQ0MTg2ODMsInJnbiI6ImFtZXIiLCJhY3NTY29wZSI6ImNoYXQsdm9pcCIsInJlc291cmNlSWQiOiI5NDNjYzM2ZS0zNWFjLTRlNGEtYThjNi05MDRjNzkxNzM2NWEiLCJyZXNvdXJjZUxvY2F0aW9uIjoidW5pdGVkc3RhdGVzIiwiaWF0IjoxNzI0MzMyMjgzfQ.iaUYvYUNogBZBWMXHFaQolnqG0Lq5UTIQ9GNNNtrwYY8yBASgpDtr7O4ofK6l6IDlx0cMUrDiE9hafVYcaxdGBi4A71XsaGiYspacp2VJR0XampXi6GFyLin4OTY_BTBS5BufB8GUmtK7eCrnEd7IRLg1P8h5boYkb0O_jJ5my5t2lDvRP99FqTeVpV-Kz0H_U49pMoZHNeFtllqUWZEiFYZuin2qeooFs4tgF2Sbo0Q5WBd8yiv_rnc_en-2PC42PDo3lRriw5bJ7_RHssytFBgCVYUG5i_BMEosEAMuT032-LYZBw9pEYGUigJCxXBcAbZ_OzkrL_wWqvX1ftNiA')
  // const [teamMeetingLink, setTeamMeetingLink] = useState('')
  // const [message, setMessage] = useState('This is Message')

  // Create ACS Credentials
  // const credentials = useMemo(()=>{
  //   if(token){
  //     return new AzureCommunicationTokenCredential(token)
  //   }
  //   return
  // },[token])

  // // Create ACS call adapter for Call Component
  // const callAdapterArgs = useMemo(()=>{
  //   if(credentials && userID && token  && teamMeetingLink && message ){
  //     return {
  //     userID: fromFlatCommunicationIdentifier(userID),
  //     displayName,
  //     credentials,
  //     locator : {meetingLink:teamMeetingLink},
  //     }

  //   }
  //  },[userID, displayName, credentials, teamMeetingLink])

  //Create ACS call adapter

  //  const callAdaper = useAzureCommunicationCallAdapter(callAdapterArgs);

  return (
    <>
      <Router>
        <div className="appbase flexWraper">
          <Routes>
            {/* <Route path="/" element={<Screen0 />} /> */}
            <Route
              path="/"
              element={
                <Screen1
                  setCamera={setCamera}
                  setMicrophone={setMicrophone}
                  setSpeaker={setSpeaker}
                  setDevicesList={setDevicesList}
                />
              }
            />
            <Route path="/screen2" element={<Screen2 />} />
            <Route path="/screen3" element={<Screen3 />} />
            <Route path="/screen4" element={<Screen4 />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
