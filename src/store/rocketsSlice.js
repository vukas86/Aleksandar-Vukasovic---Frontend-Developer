import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRockets = createAsyncThunk(
  "rockets/fetchRockets",
  async () => {
    const res = await fetch("https://api.spacexdata.com/v4/rockets");
    const data = await res.json();
    return data;
  }
);
