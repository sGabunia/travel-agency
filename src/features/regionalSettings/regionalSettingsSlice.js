import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  region: "Georgia",
  currency: "GEL",
};

const regionalSettingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    chooseSettings(state, action) {
      state.region = action.payload.region;
      state.currency = action.payload.currency;
    },
  },
});

export const { chooseSettings } = regionalSettingsSlice.actions;

export default regionalSettingsSlice.reducer;
