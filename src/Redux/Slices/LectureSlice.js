import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  lecture: [],
};
export const getCourseLecture = createAsyncThunk(
  "/course/lecture",

  async (courseId) => {
    try {
      const response = axiosInstance.get(`/course?id=${courseId}`);
      toast.promise(response, {
        loading: "Loading lectures",
        error: "Failed to load lectures",
      });
      return (await response).data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);
export const addCourseLecture = createAsyncThunk(
  "/course/lecture/add",

  async (data) => {
    try {
      const response = axiosInstance.post(`/course?id=${data.id}`, data);
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
  reducers: initialState,
  extraReducers: (builder) => {
    builder
      .addCase("getCourseLecture", (state, action) => {
        console.log(action);
        state.lecture = action.payload?.lectures;
      })
      .addCase("addCourseLecture", (state, action) => {
        console.log(action);
        state.lecture.push(action.payload?.course?.lectures);
      });
  },
});
export default lectureSlice.reducer;
