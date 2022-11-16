import React from 'react';
import './Feedback.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="Feedback_statistics">
    <span className="Statistic_value">Good: {good}</span>
    <span className="Statistic_value">Neutral: {neutral}</span>
    <span className="Statistic_value">Bad: {bad}</span>
    <span className="Statistic_value">Total: {total}</span>
    <span className="Statistic_value">
      Positive feedback: {positivePercentage}%
    </span>
  </div>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
