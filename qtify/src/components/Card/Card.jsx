import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

function Card({ album }) {
  if (!album) return null;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={album.image} alt={album.title} />

        <Chip
          label={`${album.follows} Follows`}
          className={styles.followsChip}
        />
      </div>

      <p className={styles.title}>{album.title}</p>
    </div>
  );
}

export default Card;