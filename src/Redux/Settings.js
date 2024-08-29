import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  devicesList: null,
  camerasList: null,
  microphonesList: null,
  speakeresList: null,
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
    hardware: (state) => {
      async () => {
        try {
          const deviceList = await navigator.mediaDevices.enumerateDevices();
          const cameras = deviceList.filter(
            (device) => device.kind === "videoinput"
          );
          const microphones = deviceList.filter(
            (device) => device.kind === "audioinput"
          );
          const speakers = deviceList.filter((device) => {
            return device.kind === "audiooutput";
          });
          // setCameras(cameras);
          // setMicrophones(microphones);
          // setSpeakers(speakers);
          state.devicesList = deviceList;
        } catch (err) {
          console.error("Error fetching media devices:", err);
        }
      };

      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.value += 1;
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
export const { hardware, Minus, addByValue } =
  hardwareSelection.actions;

export default hardwareSelection.reducer;
