// import React, { useEffect, useRef, useState } from "react";
// import './Camera.css'

// function Camera() {
//   const videoRef = useRef(null);
//   const [stream, setStream] = useState(null);
//   const [isCameraActive, setIsCameraActive] = useState(true);

//   useEffect(() => {
//     const startCamera = async () => {
//       try {
//         // Request access to the camera
//         const mediaStream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//         });
//         setStream(mediaStream);

//         // Set the video element's srcObject to the media stream
//         if (videoRef.current) {
//           videoRef.current.srcObject = mediaStream;
//         }
//       } catch (err) {
//         console.error("Error accessing the camera:", err);
//       }
//     };

//     if (isCameraActive) {
//       startCamera();
//     } else {
//       // Stop the camera stream if it's active
//       if (stream) {
//         stream.getTracks().forEach((track) => track.stop());
//         setStream(null);
//       }
//     }

//     // Cleanup function to stop video tracks on component unmount or when camera is toggled off
//     return () => {
//       if (stream) {
//         stream.getTracks().forEach((track) => track.stop());
//       }
//     };
//   }, [isCameraActive]);

//   const toggleCamera = () => {
//     setIsCameraActive((prevState) => !prevState);
//   };

//   return (
//     <div className="camera-view flexWraper">
//       <h5> Your Camera View</h5>
//       <video
//         ref={videoRef}
//         autoPlay
//         playsInline
//         style={{
//           opacity: isCameraActive ? 1 : 0 /*Smooth fade effect */,
//         }}
//       ></video>
//       <div>

//       <button onClick={toggleCamera}>
//         {isCameraActive ?
//          <span class="material-symbols-outlined">videocam</span> :
//          <span class="material-symbols-outlined">videocam_off</span>
//          }
//       </button>
//       <button onClick={toggleCamera}>
//         {isCameraActive ?
//          <span class="material-symbols-outlined">mic</span> :
//          <span class="material-symbols-outlined">mic_off</span>
//          }
//       </button>
//       </div>
//     </div>
//   );
// }

// export default Camera;
