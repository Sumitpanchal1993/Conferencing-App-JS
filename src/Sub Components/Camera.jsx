import React, { useEffect, useRef, useState } from "react";
import "./Camera.css";

function Camera() {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(true);
  const [isAudioActive, setIsAudioActive] = useState(true); // New state for audio

  useEffect(() => {
    const startCamera = async () => {
      try {
        // Request access to both video and audio
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: isAudioActive, // Only include audio if isAudioActive is true
        });
        setStream(mediaStream);

        // Set the video element's srcObject to the media stream
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err) {
        console.error("Error accessing the camera and/or microphone:", err);
      }
    };

    if (isCameraActive) {
      startCamera();
    } else {
      // Stop the camera and audio stream if it's active
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
        setStream(null);
      }
    }

    // Cleanup function to stop video and audio tracks on component unmount or when camera is toggled off
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isCameraActive, isAudioActive]); // Re-run effect when isAudioActive changes

  const toggleCamera = () => {
    setIsCameraActive((prevState) => !prevState);
  };

  const toggleAudio = () => {
    setIsAudioActive((prevState) => !prevState);
  };

  return (
    <div className="camera-view flexWraper">
      {/* <h5>Your Camera View</h5> */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{
          opacity: isCameraActive ? 1 : 0, // Smooth fade effect
        }}
      ></video>
      <div>
        <button onClick={toggleCamera}>
          {isCameraActive ? (
            <span className="material-symbols-outlined">videocam</span>
          ) : (
            <span className="material-symbols-outlined">videocam_off</span>
          )}
        </button>
        <button onClick={toggleAudio}>
          {isAudioActive ? (
            <span className="material-symbols-outlined">mic</span>
          ) : (
            <span className="material-symbols-outlined">mic_off</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default Camera;
