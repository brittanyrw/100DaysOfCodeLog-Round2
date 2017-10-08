import React, { Component } from "react";
import styled from 'styled-components';

class LogSummary extends Component {

  render() {

    const LogTitle = styled.h2`
        color: darkgray;
    `;

    return (
      <div>
        <div>
            <LogTitle>DAY 1</LogTitle>
            <p>OCT 7, 2017</p>
            <p>This is an overview of what was completed during the day.</p>     
        </div>
      </div>
    );
  }
}

export default LogSummary;