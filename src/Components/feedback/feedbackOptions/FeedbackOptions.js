import React from "react";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button
        type="button"
        className={styles.good}
        onClick={() => onLeaveFeedback("good")}
      >
        Good
      </button>
      <button
        type="button"
        className={styles.neutral}
        onClick={() => onLeaveFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        type="button"
        className={styles.bad}
        onClick={() => onLeaveFeedback("bad")}
      >
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;
