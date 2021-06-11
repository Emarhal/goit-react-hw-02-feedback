import React from "react";
import styles from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

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
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
