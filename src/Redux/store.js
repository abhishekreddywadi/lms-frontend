/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./Slices/AuthSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
  }, // Your root reducer goes here
  devTools: true, //
});
export default store;
