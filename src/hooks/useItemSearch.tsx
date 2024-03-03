import axios from "axios";
import { useEffect, useState } from "react";
import { useActions } from "./useActions";
import { ItemState, getItemsSuccessPayload } from "../store/types/items";
import { Item } from "../types/Item.type";
import { useTypedSelector } from "./useTypedSelector";
import { searchItems } from "../api/searchItems.api";

const useItemSearch = (query: string, pageNumber: number) => {
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string>("");
  const [total, setTotal] = useState<{
    total: number | undefined;
    total_pages: number | undefined;
  }>({
    total: 0,
    total_pages: 0,
  });
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [photos, setPhotos] = useState<Item[]>([]);
  const [pageNumberIncreased, setPageNumberIncreased] = useState<number>(0);

  const { getPopularItems, updateFilterList, setItems } = useActions();
  const filter = useTypedSelector((state) => state.filter);
  let cancelFunc: Function;
  useEffect(() => {
    if (!query) return;
    setPhotos([]);
  }, [query]);

  useEffect(() => {
    if (!query) return;

    const tempItems: ItemState = {
      items: photos,
      total: total.total,
      total_pages: total.total_pages,
      isError: false,
      isLoading: false,
    };

    if (pageNumber === 1 && query !== "" && !filter[query]?.items.length) {
      updateFilterList({
        key: query,
        value: tempItems,
      });
    }

    setItems(tempItems);
  }, [photos]);

  useEffect(() => {
    if (!query) {
      getPopularItems();
      return;
    }

    if (filter[query] && pageNumberIncreased >= pageNumber) {
      // caching mechanism, if query is repeated, so we wounld not make request a to api
      // instead we take items state from filter state
      setItems(filter[query]);
      setPhotos(filter[query].items);
      setTotal({
        total: filter[query].total,
        total_pages: filter[query].total_pages,
      });
      return;
    }

    const { response, cancel } = searchItems(query, cancelFunc, pageNumber); // request to api
    cancelFunc = cancel; // cancel axios token
    response
      .then(({ data }: { data: getItemsSuccessPayload }) => {
        setPageNumberIncreased(pageNumber);
        setPhotos((prev) => [...prev, ...data.results]);
        setTotal({ total: data.total, total_pages: data.total_pages });
        setHasMore(data.results.length > 0);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
      });

    return () => cancel();
  }, [query, pageNumber]);
  return { hasMore };
};

export default useItemSearch;
