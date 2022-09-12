import React from "react";
import { BiCog } from "react-icons/bi";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={styles.navbar}>
      <h1>Notes</h1>
      <div className={styles.categories}>
        <div className={styles.aCategory}>
          <p>General</p>
          <BiCog className={styles.icon} />
        </div>
        <div className={styles.aCategory}>
          <p>General</p>
          <BiCog className={styles.icon} />
        </div>
        <div className={styles.aCategory}>
          <p>General</p>
          <BiCog className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
