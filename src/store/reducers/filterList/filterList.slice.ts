import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filterObject, filterPayload } from "../../types/filterList";

export const initialState: filterObject = {}

export const filterListSlice = createSlice({
    name: 'filterList',
    initialState,
    reducers: {
        updateFilterList(state, action: PayloadAction<filterPayload>) {
            state[action.payload.key] = action.payload.value 
        }
    }
})

export default filterListSlice.reducer