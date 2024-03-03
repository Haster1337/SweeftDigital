import { combineReducers } from "redux";
import itemReducer from "./items/items.slice";
import filterReducer from "./filterList/filterList.slice";


export const rootReducer = combineReducers({
    items: itemReducer,
    filter: filterReducer,
})

export type RootState = ReturnType<typeof rootReducer>