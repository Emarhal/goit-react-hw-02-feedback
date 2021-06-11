import React from "react";
import PropTypes from "prop-types";

const Section = ({ children, title }) => {
  return (
    <>
      <h2>{title.toUpperCase()}</h2>
      {children}
    </>
  );
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
