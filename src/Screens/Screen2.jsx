import React, { useEffect, useState } from "react";
import "./Screen2.css";
import Navbar from "../Components/Navbar";
import ChatScreen from "../Components/ChatScreen";
import Camera from "../Sub_components/Camera";
import PeoplesTile from "../Sub_components/PeoplesTile";
import { attendees } from "../Static Data/PeoplesList";
import MediaDeviceSelector from "../Sub_components/MediaDeviceSelector";

function Screen2() {
  const [selected, setSelected] = useState("");
  const [peoples, setPeoples] = useState([]);
  const [isChatshown, setIsChatShown] = useState(false);
  const [isPeoplesList, setIsPeoplesList] = useState(false);

  useEffect(() => {
    setPeoples(attendees);
  }, []);

  const handleSelect = (option) => {
    // Toggle the component visibility
    setSelected((prevSelected) => (prevSelected === option ? "" : option));
  };

  const renderContent = () => {
    switch (selected) {
      case "chat":
        return <ChatScreen />;
      case "settings":
        return <MediaDeviceSelector />;
      case "people":
        return peoples.map((item, index) => {
          return <PeoplesTile key={index} name={item.name}  />;
        });
      default:
        return "";
    }
  };

  return (
    <>
      <div className="screen2-base">
        <div className="main-display">
          <div className="screen">
            {peoples.map((person) => {
              return (
                <div key={person.id} className="peoples">
                  <Camera />
                </div>
              );
            })}
          </div>
          <div
            className="side-Pannel"
            style={{ display: selected ? "block" : "none" }}
          >
            {renderContent()}
          </div>
        </div>
        <div className="controller">
          <div className="controller">
            <Navbar onSelect={handleSelect} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen2;
