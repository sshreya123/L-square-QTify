import React from "react";
import rightArrow from "../../assets/Group 3740.svg";
import styles from "./Navigation.module.css";

function RightArrow() {
  return (
    <button className={`swiper-button-next ${styles.arrow}`}>
      <img src={rightArrow} alt="right arrow" />
    </button>
  );
}

export default RightArrow;