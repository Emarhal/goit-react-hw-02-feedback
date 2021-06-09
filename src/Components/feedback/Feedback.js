import React from "react";
import Statistics from "../statistics/Statistics";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";

const Feedback = ({
  addToGood,
  good,
  bad,
  neutral,
  addToBad,
  addToNeutral,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <div>
        <FeedbackOptions
          addToGood={addToGood}
          addToNeutral={addToNeutral}
          addToBad={addToBad}
        />
      </div>
      <div>
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          positivePercentage={positivePercentage}
        />
      </div>
    </>
  );
};

export default Feedback;
