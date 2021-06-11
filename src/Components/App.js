import React, { Component } from "react";
import Feedback from "./feedback/Feedback";
import Section from "./feedback/section/Section";
import Statistics from "./feedback/statistics/Statistics";
import Notification from "./feedback/notification/Notification";

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = (scoreName) => {
    this.setState((prevState) => {
      const oldValue = prevState[scoreName];
      return {
        [scoreName]: oldValue + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = total ? Math.round((good / total) * 100) : 0;
    return positiveFeedback;
  };
  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Pleas live feedback">
          <Feedback onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={this.state.good}
              bad={this.state.bad}
              neutral={this.state.neutral}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
