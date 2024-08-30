import React, { useEffect, useState } from "react";
import "./Screen2.css";
import Navbar from "../Components/Navbar";
import ChatScreen from "../Components/ChatScreen";
import Camera from "../Sub Components/Camera";
import PeoplesTile from "../Sub Components/PeoplesTile";
import { attendees } from "../Static Data/PeoplesList";

function Screen2() {
  const [isChatshown, setIsChatShown] = useState(false);
  const [isPeoplesList, setIsPeoplesList] = useState(false);
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    setPeoples(attendees);
  }, []);

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
          <div className="side-Pannel">
            {isChatshown ? (
              <ChatScreen />
            ) : (
              peoples.map((people) => {
                return <PeoplesTile people={people} />;
              })
            )}
          </div>
        </div>
        <div className="controller">
          <Navbar
            setIsChatShown={setIsChatShown}
            setIsPeoplesList={setIsPeoplesList}
          />
        </div>
      </div>
    </>
  );
}

export default Screen2;
