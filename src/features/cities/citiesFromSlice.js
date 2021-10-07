import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getAllData from "../../api/data";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  citiesFrom: [],
  status: "idle",
  error: null,
};

export const fetchCitiesFrom = createAsyncThunk(
  "cities/fetchCitiesFrom",
  async (city) => {
    const response = await getAllData.getCities(city);
    return response.Places;
  }
);

const citiesFromSlice = createSlice({
  name: "citiesFrom",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchCitiesFrom.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCitiesFrom.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.citiesFrom = action.payload.map((place) => ({
          ...place,
          id: nanoid(),
        }));
      })
      .addCase(fetchCitiesFrom.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default citiesFromSlice.reducer;
