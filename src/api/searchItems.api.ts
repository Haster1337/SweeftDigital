import axios from "axios";
import { $api } from "../axios";

export const searchItems = (query: string, cancel: Function, pageNumber: number) => {
  const response = $api.get(`/search/photos`, {
    params: { query: query, page: +pageNumber, per_page: 10 },
    cancelToken: new axios.CancelToken((c) => (cancel = c)),
  });

  return {response, cancel}
};
