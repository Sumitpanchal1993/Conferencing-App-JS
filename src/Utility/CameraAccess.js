import { CallClient, LocalVideoStream } from "@azure/communication-calling";
const createLocalVideoStream = async () => {
    const callClient = new CallClient();
    const deviceManager = await callClient.getDeviceManager();
    const camera = (await deviceManager.getCameras())[0];
    if (camera) {
        return new LocalVideoStream(camera);
    } else {
        console.error(`No camera device found on the system`);
    }
}


export { createLocalVideoStream };