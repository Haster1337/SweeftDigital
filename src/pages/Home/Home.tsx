import { useState} from "react";
import ItemsCatalog from "../../components/ItemsCatalog/ItemsCatalog";
import styles from "./Home.module.scss";

const Home = () => {
  const [query, setQuery] = useState<string>("");

  const changeValueHandler = async (
    e: React.SyntheticEvent<HTMLInputElement>
  ) => {
    setQuery(e.currentTarget.value);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        onChange={changeValueHandler}
        value={query}
        placeholder="Find image..."
      />
      <ItemsCatalog query={query} />
    </div>
  );
};

export default Home;
