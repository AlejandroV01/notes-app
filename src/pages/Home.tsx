import React, { useState } from "react";
import NoteList from "../components/note-list/NoteList";
import styles from "./Home.module.css";
const Home = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "this is the first note",
      date: "05/12/2022",
    },
    {
      id: 2,
      text: "this is the second note",
      date: "05/12/2022",
    },
  ]);
  return (
    <div className={styles.container}>
      <h1>ALL NOTES</h1>
      <NoteList notes={notes} />
    </div>
  );
};

export default Home;
