import React from 'react';

class Counter extends React.Component {

  // Fix method 2: arrow function in JSX

  state = {
    count: 0,
  }

  handleButtonClick() {
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <p> The current count: {this.state.count}</p>
        <button 
          onClick={() => this.handleButtonClick()}
        >
          +
        </button>
      </div>
    )
  }
}

export default Counter;