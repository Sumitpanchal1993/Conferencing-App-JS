// UploadComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadComponent = ({ mediaBlobUrl }) => {
  const [uploading, setUploading] = useState(false);

  const uploadFile = async () => {
    setUploading(true);
    const blob = await fetch(mediaBlobUrl).then(r => r.blob());
    const formData = new FormData();
    formData.append('file', blob, 'recording.webm');

    try {
      await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Upload successful');
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      {mediaBlobUrl && (
        <button onClick={uploadFile} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload Recording'}
        </button>
      )}
    </div>
  );
};

export default UploadComponent;
