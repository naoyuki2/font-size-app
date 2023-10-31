import { createSlice } from "@reduxjs/toolkit";

const initialTimeSlice = createSlice({
  name: "initialTime",
  initialState: {
    value: 30,
  },
  reducers: {
    setInitialTime: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setInitialTime } = initialTimeSlice.actions;
export default initialTimeSlice.reducer;
