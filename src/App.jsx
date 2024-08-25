import { useMemo, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Azure Imports
// import { AzureCommunicationTokenCredential } from "@azure/communication-common";
// import { CallComposite, fromFlatCommunicationIdentifier, useAzureCommunicationCallAdapter } from "@azure/communication-react";

// Custom Components imports
import Screen1 from "./Screens/Screen1";
import Screen2 from "./Screens/Screen2";
import Screen3 from "./Screens/Screen3";
import Screen4 from "./Screens/Screen4";

function App() {
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
            <Route path="/" element={<Screen1 />} />
            <Route path="/screen2" element={<Screen2 />} />
            <Route path="/screen3" element={<Screen3 />} />
            <Route path="/screen3" element={<Screen4 />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
