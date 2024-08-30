import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:0,
  devicesList: null,
  camerasList: null,
  microphonesList: null,
  speakersList: null,
  camera: null,
  microphone: null,
  speaker: null,
  isRecording: false,
  micForAll: false,
  videoForAll: false,
  chatForAll: false,
  isinstructorOnly: false,
};

export const hardwareSelection = createSlice({
  name: "Hardware_Selection",
  initialState,
  reducers: {
    selectCamera: (state) => {
      const hwDevices = async  () => {
        try {
          const deviceList = await navigator.mediaDevices.enumerateDevices();
          const cameras = deviceList.filter(
            (device) => device.kind === "videoinput"
          );
         return state.camerasList = cameras;
          // state.devicesList = deviceList;
        } 
        catch (err) {
          console.error("Error fetching media devices:", err);
        }
      };
      hwDevices()
    },

    selectMicrophone:(state)=>{
      const hwDevices = async  () => {
        try {
          const deviceList = await navigator.mediaDevices.enumerateDevices();
          const microphones = deviceList.filter(
            (device) => device.kind === "audioinput"
          );
         return state.microphonesList = microphones;
          // state.devicesList = deviceList;
        } 
        catch (err) {
          console.error("Error fetching media devices:", err);
        }


      };
      hwDevices()
    },

    selectSpeaker:(state)=>{
      const hwDevices = async () => {
        try {
          const deviceList = await navigator.mediaDevices.enumerateDevices();
          const speakers = deviceList.filter(
            (device) => device.kind === "audiooutput"
          );
          state.speakersList = speakers;
          // state.devicesList = deviceList;
        } catch (err) {
          console.error("Error fetching media devices:", err);
        }
      };
      hwDevices()
    },

    Minus: (state) => {
      state.value -= 1;
    },
    addByValue : (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectCamera, selectMicrophone, selectSpeaker,  Minus, addByValue } =
  hardwareSelection.actions;

export default hardwareSelection.reducer;
