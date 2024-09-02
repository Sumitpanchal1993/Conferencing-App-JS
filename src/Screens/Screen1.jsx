import { Link } from "react-router-dom";
import Camera from "../Sub_components/Camera";
// import Mic from "../Sub Components/Mic";
import ToggleSwitch from "../Sub_components/ToggleSwitch";
// import HardwareSelector from "../Sub Components/HardwareSelector";
import MediaDeviceSelector from "../Sub_components/MediaDeviceSelector";
import "./Screen1.css";
import Logo from "../Media/Vagaro_Logo.png";
import { createLocalVideoStream } from "../Utility/CameraAccess";
import Cretentails from "../../Cretentails.json";

// For Host Controls options
const optionArray = [
  "Start Recording",
  "Allow Microphone for All",
  "Allow Video for all",
  "Allow Chat for all",
  "Instructor Only Mode",
];

function cancelCall() {
  console.log("cancel call");
  location.reload();
}

function Screen1({
  setCamera,
  setMicrophone,
  setSpeaker,
  setDevicesList,
  userName,
}) {

  async function startCall() {
    console.log(Cretentails, "Cretentails.callAgent");
    try {
      const localVideoStream = await createLocalVideoStream();
      const videoOptions = localVideoStream ? { localVideoStreams: [localVideoStream] } : undefined;
      Cretentails.call = Cretentails.callAgent.startCall([{ communicationUserId: Credential.END_USER_ID }], { videoOptions });
      // Subscribe to the call's properties and events.
      subscribeToCall(Cretentails.call);
    } catch (error) {
      console.error(error);
    }
  
  }


  const subscribeToCall = (call) => {
    try {
        // Inspect the initial call.id value.
        console.log(`Call Id: ${call.id}`);
        //Subscribe to call's 'idChanged' event for value changes.
        call.on('idChanged', () => {
            console.log(`Call Id changed: ${call.id}`); 
        });

        // Inspect the initial call.state value.
        console.log(`Call state: ${call.state}`);
        // Subscribe to call's 'stateChanged' event for value changes.
        call.on('stateChanged', async () => {
            console.log(`Call state changed: ${call.state}`);
            if(call.state === 'Connected') {
                connectedLabel.hidden = false;
                acceptCallButton.disabled = true;
                startCallButton.disabled = true;
                hangUpCallButton.disabled = false;
                startVideoButton.disabled = false;
                stopVideoButton.disabled = false;
                remoteVideosGallery.hidden = false;
            } else if (call.state === 'Disconnected') {
                connectedLabel.hidden = true;
                startCallButton.disabled = false;
                hangUpCallButton.disabled = true;
                startVideoButton.disabled = true;
                stopVideoButton.disabled = true;
                console.log(`Call ended, call end reason={code=${call.callEndReason.code}, subCode=${call.callEndReason.subCode}}`);
            }   
        });

        call.on('isLocalVideoStartedChanged', () => {
            console.log(`isLocalVideoStarted changed: ${call.isLocalVideoStarted}`);
        });
        console.log(`isLocalVideoStarted: ${call.isLocalVideoStarted}`);
        call.localVideoStreams.forEach(async (lvs) => {
            localVideoStream = lvs;
            await displayLocalVideoStream();
        });
        call.on('localVideoStreamsUpdated', e => {
            e.added.forEach(async (lvs) => {
                localVideoStream = lvs;
                await displayLocalVideoStream();
            });
            e.removed.forEach(lvs => {
               removeLocalVideoStream();
            });
        });
        
        // Inspect the call's current remote participants and subscribe to them.
        call.remoteParticipants.forEach(remoteParticipant => {
            subscribeToRemoteParticipant(remoteParticipant);
        });
        // Subscribe to the call's 'remoteParticipantsUpdated' event to be
        // notified when new participants are added to the call or removed from the call.
        call.on('remoteParticipantsUpdated', e => {
            // Subscribe to new remote participants that are added to the call.
            e.added.forEach(remoteParticipant => {
                subscribeToRemoteParticipant(remoteParticipant)
            });
            // Unsubscribe from participants that are removed from the call
            e.removed.forEach(remoteParticipant => {
                console.log('Remote participant removed from the call.');
            });
        });
    } catch (error) {
        console.error(error);
    }
}


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
              <Camera />
            </div>
            <div>
              {optionArray.map((item, index) => {
                return <ToggleSwitch label={item} key={index} />;
              })}
            </div>
          </div>
          <div className="screen1_selector_RHS">
            <MediaDeviceSelector
              setCamera={setCamera}
              setMicrophone={setMicrophone}
              setSpeaker={setSpeaker}
              setDevicesList={setDevicesList}
            />
          </div>
        </div>
        <hr />
        <div>
          <button onClick={startCall}>
            <Link
            // to="/screen2"
            >Start Call</Link>{" "}
          </button>
          <button onClick={cancelCall}>Cancel</button>
        </div>
      </div>
    </>
  );
}

export default Screen1;
