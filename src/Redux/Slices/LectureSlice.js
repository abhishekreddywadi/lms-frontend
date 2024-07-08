import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
// const lectures = [];
const initialState = {
  lectures: [],
};
export const getCourseLecture = createAsyncThunk(
  "/course/getlectures",

  async (courseId) => {
    try {
      const response = axiosInstance.get(`/course/${courseId}`);
      toast.promise(response, {
        loading: "Loading lectures",
        error: "Failed to load lectures",
      });
      return await response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);
export const addCourseLecture = createAsyncThunk(
  "/course/lecture/add",

  async (data) => {
    try {
      const response = axiosInstance.post(`/course/${data.id}`, data);
      toast.promise(response, {
        loading: "adding  lectures",
        error: "Failed to add lectures",
      });
      return (await response).data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);
export const deleteCourseLecture = createAsyncThunk(
  "/course/lecture/delete",

  async (course_id) => {
    try {
      const response = axiosInstance.delete(`/course?id=${course_id}`);
      toast.promise(response, {
        loading: "deleting  lectures",
        sucess: "deleted successfully",
        error: "Failed to add lectures",
      });
      return (await response).data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);
const lectureSlice = createSlice({
  name: "lecture",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourseLecture.fulfilled, (state, action) => {
        console.log(action + "hello");

        state.lectures = action.payload?.lectures;
      })
      .addCase(addCourseLecture.fulfilled, (state, action) => {
        console.log(action);

        state.lectures = action.payload?.course?.lectures;
      });
  },
});
export default lectureSlice.reducer;
