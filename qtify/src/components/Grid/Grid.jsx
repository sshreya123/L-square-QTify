import React from "react";
import styles from "./Grid.module.css";

function Grid({ data, renderItem }) {
  return (
    <div className={styles.grid}>
      {data.map((item) => (
        <div key={item.id}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}

export default Grid;