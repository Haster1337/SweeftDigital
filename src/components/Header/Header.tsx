import { Link } from "react-router-dom";
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.link} to={"/home"}><button>Home</button></Link>
      <Link className={styles.link} to={"/history"}><button>History</button></Link>
    </div>
  );
};

export default Header;
