import { VideoStreamRenderer, LocalVideoStream } from '@azure/communication-calling';
import Credential from '../../Cretentails.json';

const displayLocalVideoStream = async () => {
    try {
        // Ensure LocalVideoStream is correctly initialized
        if (!Credential.LocalVideoStream) {
            // Initialize LocalVideoStream here if not already initialized
            // Example: Credential.LocalVideoStream = new LocalVideoStream(cameraDevice);
            throw new Error('LocalVideoStream is not initialized');
        }

        Credential.localVideoStreamRenderer = new VideoStreamRenderer(LocalVideoStream);
        const view = await Credential.localVideoStreamRenderer.createView();
        // localVideoContainer.hidden = false;
        // localVideoContainer.appendChild(view.target);
        return view.target;
    } catch (error) {
        console.error('Error displaying local video stream:', error);
    } 
}

export default displayLocalVideoStream;