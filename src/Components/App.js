import React, { Component } from "react";
import Feedback from "./feedback/Feedback";
import Section from "./section/Section";

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  addToGood = () => {
    this.setState((prevState) => {
      const { good } = prevState;
      return {
        good: good + 1,
      };
    });
  };
  addToNeutral = () => {
    this.setState((prevState) => {
      const { neutral } = prevState;
      return {
        neutral: neutral + 1,
      };
    });
  };
  addToBad = () => {
    this.setState((prevState) => {
      const { bad } = prevState;
      return {
        bad: bad + 1,
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
    return (
      <>
        <Section title="Pleas live feedback">
          <Feedback
            addToGood={this.addToGood}
            addToNeutral={this.addToNeutral}
            addToBad={this.addToBad}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}

export default App;
