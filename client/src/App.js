import React, { Component } from 'react';
import styled from 'styled-components';
import LogSummary from './LogSummary';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts:[]
    };
  }

  render() {

    const Icon = styled.i`
    padding: 10px;
    margin: 0 auto;
  `;

    return (
      <div>
        <header>
          <h1>100 Days of Code | Round 2 Log</h1>
          <p>Brittany Walker</p>
          <p>Start Date</p>
          <div>
            <p>This is a site for my logs for the 100 Days of Code Challenge (Round 2). For more information about the challenge, vist the main here. </p>
            <div>
              <Icon className="fa fa-link fa-2x" aria-hidden="true"></Icon>
              <Icon className="fa fa-github fa-2x" aria-hidden="true"></Icon>
              <Icon className="fa fa-twitter fa-2x" aria-hidden="true"></Icon>
              <Icon className="fa fa-medium fa-2x" aria-hidden="true"></Icon>
              <Icon className="fa fa-codepen fa-2x" aria-hidden="true"></Icon>
            </div>
          </div>
        </header>
        <LogSummary></LogSummary>
        <LogSummary></LogSummary>
        <LogSummary></LogSummary>
        <LogSummary></LogSummary>
        <footer></footer>
      </div>
    );
  }
}

export default App;



