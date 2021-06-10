import React from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";

const Feedback = ({ onLeaveFeedback }) => {
  return (
    <>
      <div>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      </div>
    </>
  );
};

export default Feedback;
