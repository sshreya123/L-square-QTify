import React from "react";
import leftArrow from "../../assets/Group 3741.svg";
import styles from "./Navigation.module.css";

function LeftArrow() {
  return (
    <button className={`swiper-button-prev ${styles.arrow}`}>
      <img src={leftArrow} alt="left arrow" />
    </button>
  );
}

export default LeftArrow;