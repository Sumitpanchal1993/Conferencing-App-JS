import Credential from '../../Cretentails.json';

const removeLocalVideoStream = async () => {
    try {
        // Check if localVideoStreamRenderer is initialized
        if (!Credential.localVideoStreamRenderer) {
            console.warn('localVideoStreamRenderer is not initialized');
            return;
        }

        // Dispose of the local video stream renderer
        Credential.localVideoStreamRenderer.dispose();
        Credential.localVideoStreamRenderer = null;

        // Hide the local video container
        if (Credential.localVideoContainer) {
            Credential.localVideoContainer.hidden = true;
        }
    } catch (error) {
        console.error('Error removing local video stream:', error);
    }
}

export default removeLocalVideoStream;