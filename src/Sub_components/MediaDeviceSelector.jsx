import React, { useState, useEffect } from 'react';

const MediaDeviceSelector = () => {
  const [devicesList, setDevicesList] = useState([]);
  const [cameras, setCameras] = useState([]);
  const [microphones, setMicrophones] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState('');
  const [selectedMicrophone, setSelectedMicrophone] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState('');

  const fetchDevices = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      setDevicesList(devices);

      const cameras = devices.filter(device => device.kind === 'videoinput');
      const microphones = devices.filter(device => device.kind === 'audioinput');
      const speakers = devices.filter(device => device.kind === 'audiooutput');

      setCameras(cameras);
      setMicrophones(microphones);
      setSpeakers(speakers);
    } catch (error) {
      console.error('Error fetching media devices:', error);
    }
  };

  useEffect(() => {
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
    <div className="media-comp-div">
      <h3>Manage Settings</h3>
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
        <label htmlFor="speaker-select">Select Speaker:</label>
        <select
          id="speaker-select"
          value={selectedSpeaker}
          onChange={handleSpeakerChange}
        >
          <option value="">Select a speaker</option>
          {speakers.map((speaker) => (
            <option key={speaker.deviceId} value={speaker.deviceId}>
              {speaker.label || "Unnamed Speaker"}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MediaDeviceSelector;