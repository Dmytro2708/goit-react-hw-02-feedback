import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  updateNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  updateBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  

  render() {
    const { good, neutral, bad } = this.state;
    const Total = good + neutral + bad;
    const Positive = Math.round((good / Total) * 100);

    return (
      <div>
        <p>Please leave feedback</p>

        <FeedbackOptions
          positive={this.updateGood}
          negative={this.updateBad}
          neutral={this.updateNeutral}
        />

<h2>Statistics</h2>
        
        {Total!==0 ? (<> <p>good : {good}</p>
        <p>neutral : {neutral}</p>
        <p>bad : {bad}</p>
        <p>Total : {Total}</p>
        <p>Positive feedback : {Positive}%</p></>) : ( <p>There is no feedback</p>)                }

        <GlobalStyle />
      </div>
    );
  }
}
