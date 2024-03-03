import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPopularItemsRequest } from "../../../api/getPopularItems.api";
import { Item } from "../../../types/Item.type";

export const getPopularItems = createAsyncThunk(
  "items/popular",
  async (_, thunkApi) => {
    const response: Item[] = await getPopularItemsRequest();
    return response;
  }
);
