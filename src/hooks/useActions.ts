import { useDispatch } from "react-redux";
import * as itemsActions from '../store/reducers/items/items.actions'
import {itemsSlice} from '../store/reducers/items/items.slice'
import {filterListSlice} from "../store/reducers/filterList/filterList.slice";
import { useMemo } from "react";
import { bindActionCreators } from "redux";

const rootActions = {
  ...itemsActions,
  ...filterListSlice.actions,
  ...itemsSlice.actions
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
