import React from 'react';

class Counter extends React.Component {

  // Fix method 1: constructor bind

  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick() {
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <p> The current count: {this.state.count}</p>
        <button 
          onClick={this.handleButtonClick}
        >
          +
        </button>
      </div>
    )
  }
}

export default Counter;