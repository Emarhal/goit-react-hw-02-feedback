import React from "react";
import Notification from "../notification/Notification";
import PropTypes from "prop-types";

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <div>
      {total ? (
        <div>
          <p>Good{good}</p>
          <p>Neutral{neutral}</p>
          <p>Bad{bad}</p>
          <p>Total:{total}</p>
          <p>Positive feedback:{positivePercentage}%</p>
        </div>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
