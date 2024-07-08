import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
  allUserCount: 0,
};
export const getAllUsers = createAsyncThunk("user/admin", async () => {
  try {
    const response = await axiosInstance.get("/user/admin");
    toast.promise(response, {
      loading: "loading the users",
      success: "Users were successfully retrieved",
      error: "failed to retrieve the users",
    });
    return (await response).data;
  } catch (error) {
    // handle error here
    toast.error(error?.response?.data?.message);
  }
});
const statSlice = createSlice({
  name: "stat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.allUserCount = action.payload.length;
    });
  },
});
export default statSlice.reducer;
