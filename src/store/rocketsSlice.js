import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRockets = createAsyncThunk(
  "rockets/fetchRockets",
  async () => {
    try {
      const res = await fetch("https://api.spacexdata.com/v4/rockets");
      const data = await res.json();
      console.log("API Response:", data);
      return data;
    } catch (error) {
      console.error("Fetch Rockets Error:", error.message);
      throw error;
    }
  }
);

const rocketSlice = createSlice({
  name: "rockets",
  initialState: { data: [], loading: false, error: null, searchTerm: "" },
  reducers: {
    selectRocket: (state, action) => {
      state.selectedRocket = action.payload;
    },
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export const { selectRocket, updateSearchTerm } = rocketSlice.actions;
export default rocketSlice.reducer;
