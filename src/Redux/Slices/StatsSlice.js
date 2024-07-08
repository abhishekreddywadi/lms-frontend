import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
  allUserCount: 0,
};
export const getAllUsers = createAsyncThunk("user/admin", async () => {
  try {
    const response = axiosInstance.get("/user/getAllUsers");
    toast.promise(response, {
      loading: "loading the users",
      success: (data) => {
        return data?.data?.message; // assuming users is an array of users in the response data
      },
      error: "failed to retrieve the users",
    });
    return (await response).data;
  } catch (error) {
    // handle error here
    toast.error(error?.response?.data?.message);
  }
});
const statSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.allUserCount = action.payload?.users;
    });
  },
});
export default statSlice.reducer;
