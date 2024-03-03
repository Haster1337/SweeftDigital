import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemState } from "../../types/items";
import { getPopularItems } from "./items.actions";

const initialState: ItemState = {
  items: [],
  isLoading: false,
  isError: false,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ItemState>) {
      return { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPopularItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPopularItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getPopularItems.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
        state.items = [];
      });
  },
});

export default itemsSlice.reducer;
