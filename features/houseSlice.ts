"use client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ResultResponse = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};
const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
    getHouses: (state, action: PayloadAction<ResultResponse>) => {
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.results = action.payload.results;
    },
  },
});

export default houseSlice.reducer;
export const { getHouses } = houseSlice.actions;
