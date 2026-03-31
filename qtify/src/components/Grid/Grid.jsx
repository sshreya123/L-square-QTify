import React from "react";
import Card from "../Card/Card";
import styles from "./Grid.module.css";

function Grid({ data = [] }) {
  if (!data || data.length === 0) return null;

  return (
    <div className={styles.grid}>
      {data.map((album) => (
        album && <Card key={album.id} album={album} />
      ))}
    </div>
  );
}

export default Grid;