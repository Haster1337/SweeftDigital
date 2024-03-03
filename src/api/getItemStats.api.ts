import { $api } from "../axios";
import { Item } from "../types/Item.type";

export const getItemStats = (item: Item | undefined) => {
  return $api.get(`/photos/${item?.id}/statistics`);
};
