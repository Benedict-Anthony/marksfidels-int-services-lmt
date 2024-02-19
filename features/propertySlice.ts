import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Property = {} as Property;

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    getProperties: (state, action: PayloadAction<Property>) => {
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.results = action.payload.results;
    },
  },
});

export default propertySlice.reducer;
export const { getProperties } = propertySlice.actions;
