import React from 'react';

class Counter extends React.Component {

  state = {   
    count: 0,
  };

  handleButtonClick() {
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <p> The current count: {this.state.count}</p>
        <button 
          // OPTION 00 (Didn't work, b/c 'this' is undefined)
          onClick={this.handleButtonClick}
        >
          +
        </button>
      </div>
    )
  }
}

export default Counter;