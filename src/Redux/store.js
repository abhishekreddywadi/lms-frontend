/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./Slices/AuthSlice";
import CourseSlice from "./Slices/CourseSlice";
import LectureSlice from "./Slices/LectureSlice";
import StatsSlice from "./Slices/StatsSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    course: CourseSlice,
    lecture: LectureSlice,
    stats: StatsSlice,
  }, // Your root reducer goes here
  devTools: true, //
});
export default store;
