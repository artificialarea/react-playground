import React from 'react';

// src: https://courses.thinkful.com/react-v1/checkpoint/9#assignment
// alt solution: https://github.com/tomatau/state-drills/blob/master/src/state-drills/HelloWorld.js

class HelloWorld extends React.Component {
  state = {
    who: 'who?',
  }

  handleButtonClick = (event) => {
    this.setState({who: event.target.value})
  }

  render() {
    return (
      <div className="greetings">

        <p>Hello, {this.state.who}</p>

        <button value="world!"
          onClick={this.handleButtonClick}
        >
          World
        </button>
        <button value="friend!"
          onClick={this.handleButtonClick}
        >
          Friend
        </button>
        <button value="React!"
          onClick={this.handleButtonClick}
        >
          React
        </button>
      </div>
    )
  }
}

export default HelloWorld;