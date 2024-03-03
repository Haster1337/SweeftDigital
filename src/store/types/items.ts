import { Item } from "../../types/Item.type";

export interface ItemState {
  items: Item[];
  isError: boolean;
  isLoading: boolean;
  message?: string | unknown;
  total?: number;
  total_pages?: number;
}

export interface getItemsSuccessPayload {
  results: Item[];
  total: number;
  total_pages: number;
}

export type getItemsPayload = boolean;
