import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import './Feedback.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickIncrement = lable => {
    const { btn } = lable;
    this.setState(prevState => {
      return {
        [btn]: prevState[btn] + 1,
      };
    });
  };

  CountTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  CountPositiveFeedbackPercentage = () => {
    return parseInt((this.state.good / this.CountTotalFeedback()) * 100);
  };

  render() {
    return (
      <section title="Feedback" className="Feedback_container">
        <h1>Please leave feedback</h1>

        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.clickIncrement}
        ></FeedbackOptions>
        <h2>Statistics</h2>
        {this.CountTotalFeedback() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.CountTotalFeedback()}
            positivePercentage={this.CountPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </section>
    );
  }
}

export default Feedback;
