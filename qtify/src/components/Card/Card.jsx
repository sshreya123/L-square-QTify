import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

function Card({ item, type }) {
  if (!item) return null;

  const chipLabel =
    type === "song"
      ? `${item.likes} Likes`
      : `${item.follows} Follows`;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={item.image} alt={item.title} />

        <Chip
          label={chipLabel}
          className={styles.chip}
        />
      </div>

      <p className={styles.title}>{item.title}</p>
    </div>
  );
}

export default Card;