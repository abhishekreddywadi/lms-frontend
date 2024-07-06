/* eslint-disable no-unused-vars */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "",
  data: localStorage.getItem("data") || {},
};
export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
  try {
    const res = axiosInstance.post("user/register", data);
    toast.promise(res, {
      loading: "wait creating your account",
      success: (data) => {
        return data?.data?.message;
      },
      error: "failed to create your account",
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});
export const login = createAsyncThunk("/auth/login", async (data) => {
  try {
    const res = axiosInstance.post("/user/login", data);
    toast.promise(res, {
      loading: "logging in",
      success: (data) => {
        //  localStorage.setItem("isLoggedIn", true);
        //  localStorage.setItem("role", data?.data?.role);
        //  localStorage.setItem("data", JSON.stringify(data?.data));
        return data?.data?.message;
      },
      error: "failed to login",
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});
export const logout = createAsyncThunk("/auth/logout", async (data) => {
  try {
    const res = await axiosInstance.post("/user/logout");
    toast.success(res?.data?.message);
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", action?.payload?.role);
        localStorage.setItem("data", JSON.stringify(action?.payload?.user));
        state.isLoggedIn = true;
        state.role = action?.payload?.role;
        state.data = action?.payload?.user;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", action?.payload?.role);
        localStorage.setItem("data", JSON.stringify(action?.payload?.user));
        state.isLoggedIn = true;
        state.role = action?.payload?.role;
        state.data = action?.payload?.user;
      })
      .addCase(logout.fulfilled, (state, action) => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("role");
        localStorage.removeItem("data");
        state.isLoggedIn = false;
        state.role = "";
        state.data = {};
      });
  },
});
// export const {}=AuthSlice.actions
export default AuthSlice.reducer;
