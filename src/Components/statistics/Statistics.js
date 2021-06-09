import React from "react";
import Notification from "./notification/Notification";

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <>
      <h3>Statistics</h3>
      {total() > 0 ? (
        <>
          <p>Good{good}</p>
          <p>Neutral{neutral}</p>
          <p>Bad{bad}</p>
          <p>Total:{total()}</p>
          <p>Positive feedback:{positivePercentage()}%</p>
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};

export default Statistics;
