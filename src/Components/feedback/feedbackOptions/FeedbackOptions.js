import React from "react";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ addToGood, addToNeutral, addToBad }) => {
  return (
    <>
      <button type="button" className={styles.good} onClick={() => addToGood()}>
        Good
      </button>
      <button
        type="button"
        className={styles.neutral}
        onClick={() => addToNeutral()}
      >
        Neutral
      </button>
      <button type="button" className={styles.bad} onClick={() => addToBad()}>
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;
