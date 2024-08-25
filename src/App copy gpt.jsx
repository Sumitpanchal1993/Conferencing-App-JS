// App.js
import React, { useState } from 'react';
import { createUserIdentity, setupCallAgent, startCall, endCall, getCallAgent } from './Utility/acsService';

function App() {
  const [userId, setUserId] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [calleeId, setCalleeId] = useState('');
  const [call, setCall] = useState(null);

  const handleCreateUser = async () => {
    const { communicationUserId, communicationUserToken } = await createUserIdentity();
    setUserId(communicationUserId);
    setUserToken(communicationUserToken);

    const agent = await setupCallAgent(communicationUserToken);
  };

  const handleStartCall = () => {
    if (userId && userToken && calleeId) {
      const newCall = startCall(calleeId);
      setCall(newCall);
    }
  };

  const handleEndCall = () => {
    endCall();
    setCall(null);
  };

  return (
    <div>
      <button onClick={handleCreateUser}>Create User</button>
      <input
        type="text"
        value={calleeId}
        onChange={(e) => setCalleeId(e.target.value)}
        placeholder="Enter callee ID"
      />
      <button onClick={handleStartCall}>Start Call</button>
      <button onClick={handleEndCall}>End Call</button>
    </div>
  );
}

export default App;
