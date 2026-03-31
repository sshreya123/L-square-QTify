import React from "react";
import arrow from "../../assets/Group 3741.svg";
import styles from "./Navigation.module.css";

function LeftArrow() {
  return (
    <div className={`left-arrow ${styles.arrow}`}>
      <img src={arrow} alt="left arrow" />
    </div>
  );
}

export default LeftArrow;