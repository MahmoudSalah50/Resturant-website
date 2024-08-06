import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchMenu = createAsyncThunk(
  "menuslice/fetchMenu",
  async () => {
    const res = await fetch("http://localhost:9000/menuItems");
    const data = await res.json();
    return data;
  }

);

export const menuSlice = createSlice({
  initialState: [],
  name: "menuslice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMenu.fulfilled, (state, actions) => {
      return actions.payload;
    });
  },
});

export default menuSlice.reducer;
