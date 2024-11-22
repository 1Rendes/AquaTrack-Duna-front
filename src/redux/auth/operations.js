import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (values, thunkApi) => {
    try {
      const res = await axios.post(
        "https://connections-api.goit.global/users/signup",
        values
      );
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (values, thunkApi) => {
    try {
      const res = await axios.post(
        "https://connections-api.goit.global/users/login",
        values
      );
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await axios.post("https://connections-api.goit.global/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkApi.rejectWithValue("Unable to fetch user");
    }
    try {
      setAuthHeader(persistedToken);
      const res = await axios.get(
        "https://connections-api.goit.global/users/current"
      );
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
