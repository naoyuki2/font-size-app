import { createSlice } from "@reduxjs/toolkit";

const fontSizeSlice = createSlice({
  name: "fontSize",
  initialState: {
    randFontSize: Math.floor(Math.random() * 200) + 1,
    inputFontSize: "",
  },
  reducers: {
    setRandFontSize: (state) => {
      state.randFontSize = Math.floor(Math.random() * 200) + 1;
    },
    setInputFontSize: (state, action) => {
      // if (action.payload == NaN || action.payload == "") {
      //   state.inputFontSize = "";
      // } else {
      //   state.inputFontSize = action.payload;
      // }
      if (isNaN(action.payload) || action.payload == "") {
        state.inputFontSize = "";
      } else {
        state.inputFontSize = action.payload;
      }
    },
  },
});

export const { setRandFontSize, setInputFontSize } = fontSizeSlice.actions;
export default fontSizeSlice.reducer;
