// src/components/VideoRoom.js
import React, { useEffect, useRef, useState } from 'react';

const VideoRoom = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    // Initialize WebRTC
    const peerConnection = new RTCPeerConnection();

    // Get local media stream
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        setLocalStream(stream);
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
        stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
      })
      .catch(error => {
        console.error('Error accessing media devices.', error);
      });

    peerConnection.ontrack = event => {
      const [remoteStream] = event.streams;
      setRemoteStream(remoteStream);
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = remoteStream;
      }
    };

    peerConnection.onicecandidate = event => {
      if (event.candidate) {
        // Handle ICE candidates (this would require signaling server in real use case)
        console.log('New ICE candidate:', event.candidate);
      }
    };

    return () => {
      // Clean up
      peerConnection.close();
      localStream?.getTracks().forEach(track => track.stop());
    };
  }, []);

  return (
    <div>
      <video ref={localVideoRef} autoPlay muted style={{ width: '45%' }} />
      <video ref={remoteVideoRef} autoPlay style={{ width: '45%' }} />
    </div>
  );
};

export default VideoRoom;
