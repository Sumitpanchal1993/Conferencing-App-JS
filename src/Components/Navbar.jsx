import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import SplButtons from "../Sub_components/SplButtons";
// import ShareScreen from '../Media/ShareScreen.svg'
import "./Navbar.css";
import HostName from "../Sub_components/HostName";
// import ScreeShare from './ScreeShare'

function Navbar({ setIsChatShown, setIsPeoplesList }) {
  const [isMic, setIsMic] = useState(true);
  const [isCam, setIsCam] = useState(true);
  const [isRaise, setIsRaise] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // an Array for the navbar function and display icon
  const buttonIcons = [
    {
      icon: <span className="material-symbols-outlined">desktop_windows</span>,
      work: async () => {
        try {
          const stream = await navigator.mediaDevices.getDisplayMedia({
            video: true,
          });
          streamRef.current = stream;
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setIsSharing(true);
          document.getElementById("screenShared").style.display = "block";
          console.log("screen start");
        } catch (error) {
          console.error("Error starting screen share:", error);
        }
      },
    },
    {
      icon: (
        <span className="material-symbols-outlined">radio_button_checked</span>
      ),
      work: () => {
        alert("i will start recording the screen");
      },
    },
    {
      icon: (
        <span className="material-symbols-outlined">
          {isCam ? "videocam" : "videocam_off"}
        </span>
      ),
      work: () => {
        let doc = Array.from(document.getElementsByClassName("camera-view"));
        doc.forEach((item) => {
          setIsCam(!isCam);
          {
            isCam
              ? (item.style.display = "none")
              : (item.style.display = "flex");
          }
          // if (item.style.display === 'flex') {
          //   item.style.display = 'none'
          // } else { item.style.display = 'flex' }
        });
      },
    },
    {
      icon: (
        <span className="material-symbols-outlined">
          {isMic ? "mic" : "mic_off"}
        </span>
      ),
      work: () => {
        setIsMic(!isMic);
      },
    },
    {
      icon: (
        <span
          className="material-symbols-outlined"
          style={{ textDecoration: isRaise && "underline" }}
        >
          back_hand
        </span>
      ),
      work: () => {
        setIsRaise(!isRaise);
      },
    },
    {
      icon: (
        <span
          className="material-symbols-outlined"
          onClick={() => onSelect("chat")}
        >
          chat
        </span>
      ),
    },
    {
      icon: (
        <span
          className="material-symbols-outlined"
          onClick={() => onSelect("people")}
        >
          groups
        </span>
      ),
    },
    {
      icon: (
        <span
          className="material-symbols-outlined"
          onClick={() => onSelect("settings")}
        >
          settings
        </span>
      ),
    },
  ];

  const stopScreenShare = () => {
    if (streamRef.current) {
      document.getElementById("screenShared").style.display = "none";
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      setIsSharing(false);
      console.log("screen stop");
    }
  };

  return (
    <>
      <nav>
        <div>
          <HostName />
        </div>
        <div className="screenShare" id="screenShared">
          <video ref={videoRef} />
          {isSharing ? (
            <button
              onClick={() => {
                stopScreenShare();
              }}
            >
              Stop
            </button>
          ) : (
            ""
          )}
        </div>

        <div className="meeting-controls">
          {buttonIcons.map((item, index) => {
            return <SplButtons key={index} icon={item.icon} work={item.work} />;
          })}

          <button>
            <Link to={"/screen3"}>End Call</Link>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
