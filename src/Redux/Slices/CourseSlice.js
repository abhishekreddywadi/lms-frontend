import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";
const initialState = {
    courseData=[]
};
export const getAllCourses = createAsyncThunk("/course/get",async()=>{
try {
    const response =  axiosInstance.get("/course")
    toast.promise(response,{
        loading:"loading the course",
        success:"Course was successfully retrieved",
        error:"failed to retrieve the course"

    })
    return (await response).data?.courses;

} catch (error) {
    toast.error(error?.response?.data?.message)
    
}})

const CourseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder)=>{

  },
});

// export const { actions: courseActions } = CourseSlice;

export default CourseSlice.reducer;
