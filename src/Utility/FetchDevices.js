

const fetchDevices = async () => {
  try {
    const deviceList = await navigator.mediaDevices.enumerateDevices();
    const cameras = deviceList.filter((device) => device.kind === "videoinput");
    const microphones = deviceList.filter((device) => device.kind === "audioinput");
    const speakers = deviceList.filter((device) => device.kind === "audiooutput");
    console.table(deviceList);
    setCamerasList(cameras);
    setMicrophonesList(microphones);
    setSpeakersList(speakers);
    setDevices(deviceList);
  } catch (err) {
    console.error("Error fetching media devices:", err);
  }
};


export {fetchDevices}