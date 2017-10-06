import React, { Component } from "react";
import styled from 'styled-components';

class Log extends Component {

  render() {

    const LogTitle = styled.h2`
        color: darkgray;
    `;

    return (
      <div>
        <div>
            <LogTitle>TITLE</LogTitle>
            <p>DATE</p>
            <p>OVERVIEW</p>
            <h2>Projects</h2>
            <div>
                <h3>Project Name</h3>
                <div>Project Image</div>
                    <div>
                        <button>Demo</button>
                        <button>Code</button>
                    </div>
                <p>Project Description</p>
            </div>    
            <h2>Learning</h2>  
            <div>
                <h3>Learning Name</h3>
                <p>Learning Description</p>
            </div>
            <h2>Events</h2>
            <div>
                <h3>Event Name</h3>
                <div>Event Image</div>
                <p>Learning Description</p>
            </div>                               
        </div>
      </div>
    );
  }
}

export default Log;