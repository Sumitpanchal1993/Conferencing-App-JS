import React, { useEffect, useRef, useState } from "react";

function Mic() {
  const [stream, setStream] = useState(null);
  const [audioContext, setAudioContext] = useState(null);
  const [analyser, setAnalyser] = useState(null);
  const [dataArray, setDataArray] = useState(null);
  const [frequencyData, setFrequencyData] = useState([]);

  useEffect(() => {
    const startAudioStream = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setStream(mediaStream);

        const context = new (window.AudioContext || window.webkitAudioContext)();
        setAudioContext(context);

        const source = context.createMediaStreamSource(mediaStream);
        const analyserNode = context.createAnalyser();
        source.connect(analyserNode);
        analyserNode.fftSize = 2048;

        const bufferLength = analyserNode.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        setAnalyser(analyserNode);
        setDataArray(dataArray);

        // Function to update frequency data
        const updateFrequencyData = () => {
          analyserNode.getByteFrequencyData(dataArray);
          setFrequencyData([...dataArray]);
          requestAnimationFrame(updateFrequencyData);
        };

        updateFrequencyData();
      } catch (err) {
        console.error("Error accessing the microphone", err);
      }
    };

    startAudioStream();

    // Cleanup on component unmount
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      if (audioContext) {
        audioContext.close();
      }
    };
  }, [stream, audioContext]);

  return (
    <div>
      <h1>Microphone View</h1>
      <div>
        <h2>Frequency Data</h2>
        <div style={{ display: 'flex' }}>
          {frequencyData.map((value, index) => (
            <div key={index} style={{ height: value + 'px', width: '5px', backgroundColor: 'blue', margin: '1px' }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mic;
