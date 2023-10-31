import { configureStore } from "@reduxjs/toolkit";
import initialTimeReducer from "./initialTimeSlice";

const store = configureStore({
  reducer: {
    initialTime: initialTimeReducer,
  },
});

export default store;
