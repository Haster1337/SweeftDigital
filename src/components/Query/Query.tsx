import React, { useState } from "react";
import styles from './Query.module.scss'

interface QueryProps {
  query: string;
  changeActiveQuery: Function;
}

const Query: React.FC<QueryProps> = ({ query, changeActiveQuery }) => {
 
  const [isClicked, setIsClicked] = useState(false)

  const changeActiveQueryHandler = () => {
    if(isClicked){
      changeActiveQuery(null)
    } else {
      changeActiveQuery(query)
    }
    setIsClicked(!isClicked)
  }
 
  return (
    <div className={styles.container}>
      <button onClick={changeActiveQueryHandler}>{query}</button>
    </div>
  );
};

export default Query;
