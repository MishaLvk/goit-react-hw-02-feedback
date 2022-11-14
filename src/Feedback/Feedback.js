import React from 'react';

class Feedback extends React.Component {
  state = {
    goodValue: 0,
    neutralValue: 0,
    badValue: 0,
  };

  GoodIncrement = () => {
    this.setState(prevState => {
      return {
        goodValue: prevState.goodValue + 1,
      };
    });
  };

  NeutralIncrement = () => {
    this.setState(prevState => {
      return {
        neutralValue: prevState.neutralValue + 1,
      };
    });
  };

  BadIncrement = () => {
    this.setState(prevState => {
      return {
        badValue: prevState.badValue + 1,
      };
    });
  };

  SummIncrement = () => {
    return this.state.goodValue + this.state.neutralValue + this.state.badValue;
  };

  PositiveFeedback = () => {
    return parseInt((this.state.goodValue / this.SummIncrement()) * 100);
  };

  render() {
    return (
      <div className="Feedback">
        <h1>Please leave feedback</h1>
        <div className="Feedback_controls">
          <button type="button" onClick={this.GoodIncrement}>
            Good
          </button>
          <button type="button" onClick={this.NeutralIncrement}>
            Neutral
          </button>
          <button type="button" onClick={this.BadIncrement}>
            Bad
          </button>
        </div>
        <div className="Feedback_statistics">
          <h2>Statistics</h2>
          <span className="Statistic_value">Good: {this.state.goodValue}</span>
          <span className="Statistic_value">
            Neutral: {this.state.neutralValue}
          </span>
          <span className="Statistic_value">Bad: {this.state.badValue}</span>
          <span className="Statistic_value">Total: {this.SummIncrement()}</span>
          <span className="Statistic_value">
            Positive feedback: {this.PositiveFeedback()}%
          </span>
        </div>
      </div>
    );
  }
}

export default Feedback;
