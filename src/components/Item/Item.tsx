import { useEffect, useState } from "react";
import { ItemStats, Item as ItemType } from "../../types/Item.type";
import { getItemStats } from "../../api/getItemStats.api";
import styles from "./Item.module.scss";

interface ItemProps {
  item: ItemType | undefined;
  modal: boolean;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const [itemStats, setItemStats] = useState<ItemStats>();

  useEffect(() => {
    const stats = getItemStats(item);
    stats.then((res) => setItemStats(res.data));
  }, [item]);

  console.log(itemStats);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.img}>
          <img src={item?.urls.small} alt={item?.alt_description} />
        </div>
        <div className={styles.stats}>
          <div>
            <p>
              Views: <strong>{itemStats?.views.total}</strong>
            </p>
          </div>
          <div>
            <p>
              Downloads: <strong>{itemStats?.downloads.total}</strong>
            </p>
          </div>
          <div>
            <p>
              Likes: <strong>{itemStats?.likes.total}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
