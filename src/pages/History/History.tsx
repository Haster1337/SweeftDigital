import { useState } from "react";
import Query from "../../components/Query/Query";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ItemsCatalog from "../../components/ItemsCatalog/ItemsCatalog";
import styles from "./Histrory.module.scss";

const History = () => {
  const filter = useTypedSelector((state) => state.filter);
  const [activeQuery, setActiveQuery] = useState<string | null>(null);

  console.log(filter);

  const changeActiveQuery = (query: string) => {
    setActiveQuery(query);
  };

  const filterList = Object.keys(filter);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>History</h1>
        {!filterList.length && <p className={styles.empty}>History is empty</p>}
        <div className={styles['filter-list']}>
          {filterList.map((query) => (
          <Query
            key={query}
            query={query}
            changeActiveQuery={changeActiveQuery}
          />
        ))}
        </div>
        
        {activeQuery && <ItemsCatalog query={activeQuery} />}
      </div>
    </div>
  );
};

export default History;
