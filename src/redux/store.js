import { configureStore } from "@reduxjs/toolkit";
import initialTimeReducer from "./initialTimeSlice";
import fontSizeReducer from "./fontSizeSlice";

const store = configureStore({
  reducer: {
    initialTime: initialTimeReducer,
    fontSize: fontSizeReducer,
  },
});

export default store;
