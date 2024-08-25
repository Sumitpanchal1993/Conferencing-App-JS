import React, { useEffect, useRef, useState } from "react";

function CameraView() {
  const videoRef = useRef(null); // Initialize the ref as null
  const [stream, setStream] = useState(null);

  useEffect(() => {
    // Function to start the video stream
    const startStream = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err) {
        console.error("Error accessing the camera", err);
      }
    };

    startStream();
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <>
      <div>
        <h1>Camera view</h1>
        <video ref={videoRef} autoPlay={true} playsInline={true}></video>
      </div>
    </>
  );
}

export default CameraView;
