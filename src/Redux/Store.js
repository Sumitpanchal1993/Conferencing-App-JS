import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './CounterSlice'
import hardwareSelection  from './Settings'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    setting: hardwareSelection,
  },
})