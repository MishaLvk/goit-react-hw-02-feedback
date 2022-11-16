import React from 'react';
import './Feedback.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="Feedback_controls">
    {options.map(btn => (
      <button
        className="Feedback_controls_btn"
        key={btn}
        type="button"
        onClick={() => onLeaveFeedback({ btn })}
      >
        {btn}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
