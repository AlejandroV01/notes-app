import React from "react";
import styles from "./Nav.module.css";
const Nav = () => {
  return (
    <div className={styles.container}>
      <div className="leftNav">
        <h1>NoteApp</h1>
      </div>
      <div className={styles.rightSide}>
        <h1>rightSide</h1>
      </div>
    </div>
  );
};

export default Nav;
