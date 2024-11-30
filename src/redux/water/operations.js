import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../auth/operations";

export const addWater = createAsyncThunk(
  "water/add",
  async (waterData, thunkAPI) => {
    try {
      const { data } = await instance.post("/water", waterData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editWater = createAsyncThunk(
  "water/edit",
  async (waterData, thunkAPI) => {
    try {
      const { _id, ...editData } = waterData;
      const { data } = await instance.patch(`/water/${_id}`, editData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  "water/delete",
  async (_id, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/water/${_id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDayWater = createAsyncThunk(
  "water/getDay",
  async (date, thunkAPI) => {
    try {
      const { data } = await instance.get(`/water/day/${date}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getMonthWater = createAsyncThunk(
  "water/getMonth",
  async (yearMonth, thunkAPI) => {
    try {
      const { data } = await instance.get(`/water/month/${yearMonth}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
