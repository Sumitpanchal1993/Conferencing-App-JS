import React, {useRef, useState} from 'react'

function ScreeShare() {
    const [isSharing, setIsSharing] = useState(false);
    const videoRef = useRef(null);
    const streamRef = useRef(null);

    const startScreenShare = async () => {
        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({
                video: true
            });
            streamRef.current = stream;
            videoRef.current.srcObject = stream;
            videoRef.current.play();
            setIsSharing(true);
        } catch (error) {
            console.error('Error starting screen share:', error);
        }
    };

    const stopScreenShare = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
            setIsSharing(false);
        }
    };
  return (
    <>
      <div className="screen-share-container">
            <video ref={videoRef} className="screen-video" />
            <div className="controls">
                {!isSharing ? (
                    <button onClick={startScreenShare}>Start Screen Share</button>
                ) : (
                    <button onClick={stopScreenShare}>Stop Screen Share</button>
                )}
            </div>
        </div>
      
    </>
  )
}

export default ScreeShare




