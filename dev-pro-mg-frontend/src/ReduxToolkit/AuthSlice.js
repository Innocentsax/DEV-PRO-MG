import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, api, setAuthHeader } from "./api/Api";

export const login = createAsyncThunk("auth/login", async (userData) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/signin`, userData);
    localStorage.setItem("jwt", data.jwt);
    console.log("login success", data);
    return data;
  } catch (error) {
    console.log("catch error", error);
  }
});

export const register = createAsyncThunk("auth/register", async (userData) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/signup`, userData);
    localStorage.setItem("jwt", data.jwt);
    console.log("Register success", data);
    return data;
  } catch (error) {
    console.log("catch error", error);
  }
});

export const logout = createAsyncThunk("auth/logout", async (userData) => {
  try {
    localStorage.clear();
  } catch (error) {
    console.log("catch error", error);
  }
});

export const getUserProfile = createAsyncThunk(
  "auth/getUserProfile",
  async (jwt) => {
    setAuthHeader(jwt, api);
    try {
      const { data } = await api.get(`/api/users/profile`);
      console.log("User profile success", data);
      return data;
    } catch (error) {
      console.log("catch error", error);
    }
  }
);
export const getUserList = createAsyncThunk(
  "auth/getUserProfile",
  async (jwt) => {
    setAuthHeader(jwt, api);
    try {
      const { data } = await api.get(`/api/users`);
      console.log("User list success", data);
      return data;
    } catch (error) {
      console.log("catch error", error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loggedIn: false,
    loading: false,
    error: null,
    jwt: null,
    users: [],
  },
});
