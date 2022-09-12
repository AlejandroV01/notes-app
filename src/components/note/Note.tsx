import React from "react";
import styles from "./Note.module.css";
const Note = () => {
  return (
    <div className={styles.aNote}>
      <h2>Note Title 1</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        consequatur, odio magnam suscipit eos necessitatibus laudantium ipsam
        nisi laboriosam omnis?
      </p>
    </div>
  );
};

export default Note;
