import React, {useState} from "react";
import "./ToggleSwitch.css"; // Import the CSS file for styling

function ToggleSwitch({label}) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  console.log(isSwitchOn)

  const handleToggle = () => {
    setIsSwitchOn((prevState) => !prevState);
  };

  return (
    <>
      <div className="toggle-switch">
        {label && <span className="toggle-label">{label}</span>}
        <label className="switch flexWraper">
          <input type="checkbox" checked={isSwitchOn} onChange={handleToggle} />
          <span className="slider"></span>
        </label>
      </div>
    </>
  );
}

export default ToggleSwitch;
