import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://aquatrack-duna-server.onrender.com/",
  withCredentials: true,
});

const setAuthHeader = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const { data } = await instance.post("/auth/register", userData);

      setAuthHeader(data.data.accessToken);
      return data;
    } catch (error) {

      return thunkAPI.rejectWithValue(error.response.data.data.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const { data } = await instance.post("/auth/login", userData);
      setAuthHeader(data.data.accessToken);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.data.message);
    }
  }
);

export const logOut = createAsyncThunk("/auth/logout", async (_, thunkAPI) => {
  try {
    const { data } = await instance.post("/auth/logout");
    clearAuthHeader();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.data.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.post("/auth/refresh");
      setAuthHeader(data.data.accessToken);
      return data;
    } catch (error) {
      clearAuthHeader();
      return thunkAPI.rejectWithValue(error.response.data.data.message);
    }
  }
);

export const editUser = createAsyncThunk(
  "auth/edit",
  async (editData, thunkAPI) => {
    try {
      const { data } = await instance.patch("/users/current", editData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.data.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  "auth/current",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();

      setAuthHeader(state.auth.accessToken);
      const response = await instance.get("/users/current");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.data.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const token = getState().auth.accessToken;
      if (!token) return false;
      return true;
    },
  }
);

export const sendResetEmail = createAsyncThunk(
  "auth/sendResetEmail",
  async ({ email }, thunkAPI) => {
    try {
      const { data } = await instance.post("/auth/send-reset-email", { email });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.data.message);
    }
  }
);

export const resetPwd = createAsyncThunk(
  "auth/resetPwd",
  async ({ token, password }, thunkAPI) => {
    try {
      const { data } = await instance.post("/auth/reset-pwd", {
        token,
        password,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.data.message);
    }
  }
);

export default instance;
