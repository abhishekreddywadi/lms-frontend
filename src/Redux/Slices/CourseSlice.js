import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance";
const initialState = {
  courseData: [],
};
export const getAllCourses = createAsyncThunk("/course/get", async () => {
  try {
    const response = axiosInstance.get("/course");
    toast.promise(response, {
      loading: "loading the course",
      success: "Course was successfully retrieved",
      error: "failed to retrieve the course",
    });
    return (await response).data?.courses;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

const CourseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  // eslint-disable-next-line no-unused-vars
  extraReducers: (builder) => {
    builder
      // eslint-disable-next-line no-unused-vars
      .addCase(getAllCourses.pending, (state) => {
        // state.loading = true;
      })
      // eslint-disable-next-line no-unused-vars
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.courseData = [...action.payload];
      })
      // eslint-disable-next-line no-unused-vars
      .addCase(getAllCourses.rejected, (state, action) => {
        // state.loading = false;
      });
  },
});

// export const { actions: courseActions } = CourseSlice;

export default CourseSlice.reducer;