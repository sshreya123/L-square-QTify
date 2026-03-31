import React from "react";
import arrow from "../../assets/Group 3740.svg";
import styles from "./Navigation.module.css";

function RightArrow() {
  return (
    <div className={`right-arrow ${styles.arrow}`}>
      <img src={arrow} alt="right arrow" />
    </div>
  );
}

export default RightArrow;