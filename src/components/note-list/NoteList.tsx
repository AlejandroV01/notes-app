import React from "react";
import Note from "../note/Note";
import styles from "./NoteList.module.css";

interface Props {
  notes: any;
}

const NoteList = ({ notes }: Props) => {
  return (
    <div className={styles.notesDiv}>
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default NoteList;
