// MediaRecorderComponent.js
import React from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';

const Recording = () => {
  return (
    <ReactMediaRecorder
      audio
      video
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          <p>Status: {status}</p>
          {mediaBlobUrl && (
            <div>
              <video src={mediaBlobUrl} controls />
              <a href={mediaBlobUrl} download="recording.webm">Download Recording</a>
            </div>
          )}
        </div>
      )}
    />
  );
};

export default Recording;
