import React, { useEffect, useState } from "react";
import "./MediaDeviceSelector.css";

function MediaDeviceSelector() {
  const [devices, setDevices] = useState([]);
  const [cameras, setCameras] = useState([]);
  const [microphones, setMicrophones] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState("");
  const [selectedMicrophone, setSelectedMicrophone] = useState("");
  const [selectedSpeaker, setSelectedSpeaker] = useState("");

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const deviceList = await navigator.mediaDevices.enumerateDevices();
        const cameras = deviceList.filter(
          (device) => device.kind === "videoinput"
        );
        const microphones = deviceList.filter(
          (device) => device.kind === "audioinput"
        );
        const speakers = deviceList.filter(
          (device) => { return device.kind === "audiooutput";
        });
        console.table(deviceList)
        setCameras(cameras);
        setMicrophones(microphones);
        setSpeakers(speakers);
        setDevices(deviceList);
      } catch (err) {
        console.error("Error fetching media devices:", err);
      }
    };

    fetchDevices();
  }, []);



  const handleCameraChange = (event) => {
    setSelectedCamera(event.target.value);
  };

  const handleMicrophoneChange = (event) => {
    setSelectedMicrophone(event.target.value);
  };

  const handleSpeakerChange = (event) => {
    setSelectedSpeaker(event.target.value);
  };

  return (
    <>
      <div className="option-container">
        <label htmlFor="camera-select">Select Camera:</label>
        <select
          id="camera-select"
          value={selectedCamera}
          onChange={handleCameraChange}
        >
          <option value="">Select a camera</option>
          {cameras.map((camera) => (
            <option key={camera.deviceId} value={camera.deviceId}>
              {camera.label || "Unnamed Camera"}
            </option>
          ))}
        </select>
      </div>

      <div className="option-container">
        <label htmlFor="microphone-select">Select Microphone:</label>
        <select
          id="microphone-select"
          value={selectedMicrophone}
          onChange={handleMicrophoneChange}
        >
          <option value="">Select a microphone</option>
          {microphones.map((microphone) => (
            <option key={microphone.deviceId} value={microphone.deviceId}>
              {microphone.label || "Unnamed Microphone"}
            </option>
          ))}
        </select>
      </div>
      <div className="option-container">
        <label htmlFor="microphone-select">Select Speaker:</label>
        <select
          id="microphone-select"
          value={selectedSpeaker}
          onChange={handleSpeakerChange}
        >
          <option value="">Select a Speaker</option>
          {speakers.map((speaker) => (
            <option key={speaker.deviceId} value={speaker.deviceId}>
              {speaker.label || "Unnamed Microphone"}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default MediaDeviceSelector;
