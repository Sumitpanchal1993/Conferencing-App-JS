import { CommunicationIdentityClient } from '@azure/communication-identity';
import { CallClient, CallAgent } from '@azure/communication-calling';

// Initialize client
const connectionString = 'endpoint=https://cs-dev-us-livestream.unitedstates.communication.azure.com/;accesskey=7xPUFf9YhIe5DkS2zvW0CYYNKZNOalnCM5WAsVS3Qi7HWpbfFLM6JQQJ99AHACULyCpuxNsNAAAAAZCSlfgT'; 
const identityClient = new CommunicationIdentityClient(connectionString);
const callClient = new CallClient();

let callAgent;
let currentCall;

export async function createUserIdentity() {
  const { communicationUserId, communicationUserToken } = await identityClient.createUser();
  return { communicationUserId, communicationUserToken };
}

export async function setupCallAgent(userToken) {
  callAgent = await callClient.createCallAgent(userToken);
  return callAgent;
}

export function startCall(callee) {
  if (!callAgent) throw new Error('Call agent not initialized');
  const call = callAgent.startCall([callee], { videoOptions: { localVideoStream: null } });
  currentCall = call;
  return call;
}

export function endCall() {
  if (currentCall) {
    currentCall.hangUp();
    currentCall = null;
  }
}

export function getCallAgent() {
  return callAgent;
}
