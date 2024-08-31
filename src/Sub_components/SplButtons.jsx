import React from "react";
import "./SplButtons.css";

function SplButtons({ icon, work }) {
  const handleClick = () => {
    if (typeof work === "function") {
      work();
    } else {
      console.error("Expected work to be a function, but got:", work);
    }
  };

  return (
    <>
      <button className="splBtn" onClick={handleClick}>
        {icon}
      </button>
    </>
  );
}

export default SplButtons;
