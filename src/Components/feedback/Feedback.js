import React from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import PropTypes from "prop-types";

const Feedback = ({ onLeaveFeedback }) => {
  return (
    <>
      <div>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      </div>
    </>
  );
};

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default Feedback;
