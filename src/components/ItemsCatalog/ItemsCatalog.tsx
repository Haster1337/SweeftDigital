import React, {
  LegacyRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ItemState } from "../../store/types/items";
import { Item as ItemType } from "../../types/Item.type";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import useItemSearch from "../../hooks/useItemSearch";
import Modal from "../Modal/Modal";
import Item from "../Item/Item";
import styles from "./ItemsCatalog.module.scss";

interface ItemsCatalogProps {
  items?: ItemState;
  lastItemElementRef?: LegacyRef<HTMLDivElement> | undefined;
  query: string;
}

const ItemsCatalog: React.FC<ItemsCatalogProps> = ({ query }) => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const [activeItem, setActiveItem] = useState<ItemType>();
  const [modal, setModal] = useState(false);

  const observer = useRef<IntersectionObserver>();

  const hasMore = useItemSearch(query, pageNumber);

  const items = useTypedSelector((state) => state.items);
  const { getPopularItems } = useActions();

  useEffect(() => {
    getPopularItems();
  }, []);

  const lastItemElementRef = useCallback(
    // to find last element
    (node: HTMLDivElement) => {
      if (items.isLoading) return;

      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          // if we find it, increase page number
          setTimeout(() => {
            // timeout need to make minimal delay between requests and updating page number
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
          }, 1000);
        }
      });
      if (node) observer.current.observe(node);
    },
    [items.isLoading, hasMore]
  );

  const toggleModal = () => {
    // to close or open modal window
    setModal(!modal);
  };

  const changeActiveItem = (item: ItemType) => {
    // change active elem
    setActiveItem(item);
    toggleModal(); // and if clicked item, open modal window
  };

  return (
    <div className={styles.container}>
      {!items.items.length && <div>Nothing was found</div>}
      {items.items.map((item, index) => {
        if (items.items.length === index + 1) {
          return (
            <div
              className={styles.img}
              key={item.id}
              ref={lastItemElementRef}
              onClick={() => changeActiveItem(item)}
            >
              <img alt={item.alt_description} src={item.urls.regular} />
            </div>
          );
        } else {
          return (
            <div
              className={styles.img}
              key={item.id}
              onClick={() => changeActiveItem(item)}
            >
              <img alt={item.alt_description} src={item.urls.regular} />
            </div>
          );
        }
      })}
      <Modal toggleModal={toggleModal} modal={modal}>
        <Item item={activeItem} modal={modal} />
      </Modal>
    </div>
  );
};

export default ItemsCatalog;
