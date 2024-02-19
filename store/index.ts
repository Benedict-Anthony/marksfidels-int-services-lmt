"use client";
import houseSlice from "@/features/houseSlice";
import propertySlice from "@/features/propertySlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    house: houseSlice,
    property: propertySlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
