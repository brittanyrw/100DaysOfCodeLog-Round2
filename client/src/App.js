import React, { Component } from 'react';
import styled from 'styled-components';
import LogSummary from './LogSummary';

class App extends Component {

  render() {


    return (
      <div>
        <header>
          <h1>100 Days of Code | Round 2 Log</h1>
          <p>Brittany Walker</p>
          <p>Start Date</p>
          <stats>
            <ul>
              <li>Round One Record: 195 Days</li>
              <li>Blog Posts: 0</li>
              <li>Tweets: 0</li>       
              <li>Events: 0</li>   
              <li>Presentations: 0</li>  
              <li>Projects Completed: 0</li>                                                                             
            </ul>
          </stats>
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
