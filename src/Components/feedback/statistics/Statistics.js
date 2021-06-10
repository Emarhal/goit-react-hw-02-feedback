import React from "react";
import Notification from "../notification/Notification";

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

export default Statistics;
